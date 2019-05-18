const xServe = require('express');
const router = xServe.Router();
const config = require('config');

const bartUri = config.get('bartApi.bartUri');
const bartApiKey = config.get('bartApi.bartApiKey');

const http = require('http');

router.get('/stations', function (req, res) {
  // console.log(`router.get '/stations'...`, req);
  http.get(`${bartUri}stn.aspx?cmd=stns&key=${bartApiKey}&json=y`, (resp) => {
    // console.log(`http.get...inside /stations...`);
    let data = '';
    let chunk = '';
    resp.on('data', function (chunk) {
      // console.log(`data += chunk...`, chunk);
      data += chunk;
    });
    resp.on('end', () => {
      // console.log('chunk...', JSON.stringify(data));
      // data = JSON.stringify(data);
      return res.send(data);
    })
  }).on('error', (err) => {
    console.log(`Error: ${err.message}!`);
  });
});

router.get('/trainDepart', function (req, res) {
  // console.log('req.query= ', req.query);

  http.get(`${bartUri}etd.aspx?cmd=etd&orig=${req.query.stationAbbr}&key=${bartApiKey}&json=y`, (response) => {
    let data = '';
    let chunk = '';
    response.on('data', function (chunk) {
      data += chunk;
    });
    response.on('end', () => {
      // console.log('chunk...', JSON.stringify(data));
      return res.send(data);
    })
  }).on('error', (err) => {
    console.log(`Error: ${err.message}!`);
  });
});

router.get('/routeSched', function (req, res) {

  // console.log('req.params.origin...', req.query.origin);
  // console.log('req.params.destination...', req.query.destination);

  http.get(`${bartUri}sched.aspx?cmd=depart&orig=${req.query.origin}&dest=${req.query.destination}&b=0&key=${bartApiKey}&json=y`, (response) => {
    let data = '';
    let chunk = '';
    response.on('data', function (chunk) {
      data += chunk;
    });
    response.on('end', () => {
      // console.log('chunk...', JSON.stringify(data));
      return res.send(data);
    })
  }).on('error', (err) => {
    console.log(`Error: ${err.message}!`);
  });
});

module.exports = router;
