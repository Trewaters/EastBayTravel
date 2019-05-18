const express = require('express');
const path = require('path');
const cors = require('cors');
const xServe = express();

const bartRouter = require('../apiRoutes/bartRouter');

// configure logging
const winston = require('winston');
const logger = winston.createLogger({
  level: 'debug',
  // { emerg: 0, alert: 1, crit: 2, error: 3, warning: 4, notice: 5, info: 6, debug: 7 } //logging levels in winston

  // format: winston.format.json(),
  format: winston.format.prettyPrint(),
  transports: [
    new winston.transports.File({
      filename: './log/xErrorDebug.log',
      level: 'debug'
    }),
    new winston.transports.File({
      filename: './log/xErrorDebug.log',
      level: 'info'
    }),
    new winston.transports.File({
      filename: './log/xErrorDev.log',
      level: 'error'
    }),
    new winston.transports.File({
      filename: './log/xErrorAll.log'
    })
  ],
  exceptionHandlers: [
    new winston.transports.File({
      filename: './log/xExceptionHandling.log'
    })
  ]
});

const helmet = require('helmet');
xServe.use(helmet());
xServe.use(helmet.noCache()); // disable caching
xServe.use(helmet.referrerPolicy({ policy: 'no-referrer' }));


xServe.use(express.json());
xServe.use(express.urlencoded({ extended: true }));
xServe.use(cors());
xServe.use(express.static("dist/EastBayTravel"));
// xServe.use(express.static(path.join(__dirname, "dist/EastBayTravel"))); // I moved the webServer.js file to "app/webServer.js" and broke this line
xServe.use('/bartInfo', bartRouter);


const portNum = process.env.PORT;// || 4200;
// const portNum = process.env.PORT || 4200;
const hostName = process.env.HOST;// || 'localhost';

const webServer = xServe.listen(portNum, hostName, () => {
  console.log(
    "EastBayTravel Express web server is started and Listening" +
    "!\ncoded by Tre' Grisby"
    +
    "\n\nweb address http://" + webServer.address().address + ":" + webServer.address().port
  );
});

webServer.on("error", onError);

// trap server error and report them
function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }
  switch (error.code) {
    case 'EACCESS':
      console.error("***(Permission denied): An attempt was made to access a file in a way forbidden by its file access permissions.\n Now exiting process.");
      process.exitCode = 1;
      break;
    case 'EADDRINUSE':
      console.error("***(Address already in use): An attempt to bind a server (net, http, or https) to a local address failed due to another server on the local system already occupying that address.\n Now exiting process.");
      setTimeout(() => {
        webServer.close();
        webServer.listen(portNum, hostName, () => {
          console.log(
            "Template Express server is started and Listening on port " +
            portNumber +
            "!\nby Tre' Grisby"
          );
        });
      }, 1000)
      process.exitCode = 1;
      break;
    case 'ECONNREFUSED':
      console.error("***(Connection refused): No connection could be made because the target machine actively refused it. This usually results from trying to connect to a service that is inactive on the foreign host.\n Now exiting process.");
      process.exitCode = 1;
      break;
    case 'ETIMEDOUT':
      console.error("***(Operation timed out): A connect or send request failed because the connected party did not properly respond after a period of time. Usually encountered by http or net — often a sign that a socket.end() was not properly called.\n Now exiting process.");
      process.exitCode = 1;
      break;
  }
};

module.exports = xServe;
