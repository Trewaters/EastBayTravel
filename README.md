# "East Bay Travel"

![version](https://img.shields.io/github/package-json/v/trewaters/eastbaytravel.svg)

An app that I use to get around San Francisco Bay Area. Starting with BART schedule. Eventually include other area public transit to the app.

## Getting Started

The BART scheduling app is a website that you can use to navigate BART. All you need is a cell/wifi signal and the app takes care of the rest.

### Prerequesites

### Installing

### Tests

### Coding Style

### Deployment

### What the app should do?

View a [Demo here](https://eastbaytravel.herokuapp.com/)

1.  If the user clicks on the "You are here" dropdown they will get a list of all the BART Train stations.
2.  When the user clicks on the "Destination Station" dropdown they should get a list of all the BART Train stations,

- minus(-) the station that is already loaded into the "You are here" dropdown. (Not finished)
- Once the user selects both a "You are here" & "Destination Station" the Trip Details button appears.

4.  If user clicks "Next Train" they get all the times of trains leaving the "You are here" station next.
5.  If user clicks "Trip Details" they get DETAILS of a trip originating at the "You are here" station and ending at the "Destination Station".
6.  Trip DETAILS =

- Train Time leaving "You are here" station next. Marked as "Original Station".
- All stations on the trip route in order of first to last, including arrival times. (Not finished)
- Ending with the "Destination Station" arrival tim. Marked as "Destination"
- Show Transfer station, if there is a transfer.
- Total trip time from start to end. (Not finished)
- BART messages about this trip.

### Why is this app useful?

## CREDIT

[Bishop Fox - Cybersecurity Style Guide - v1.1] (https://www.bishopfox.com/blog/2018/02/hello-world-introducing-the-bishop-fox-cybersecurity-style-guide/)

### Built With

- [Angular CLI](https://github.com/angular/angular-cli) version 7.1.4.
- [BART API](http://api.bart.gov/docs/overview/examples.aspx) San Francisco Bay Area Rapid Transit "BART"
- [config](https://www.npmjs.com/package/config) Store environment secrets and configurations.
- [mongoose](https://www.npmjs.com/package/mongoose) work with MongoDb schema and connections
- [Contributor Covenant](https://www.contributor-covenant.org/)
- [winston](https://www.npmjs.com/package/winston) server logging.
- [helmet](https://www.npmjs.com/package/helmet) add security for my express server
- [body-parser](https://www.npmjs.com/package/body-parser)
- [cors](https://www.npmjs.com/package/cors)
- [rxjs-compat](https://www.npmjs.com/package/rxjs-compat) needed for some 
- [w3.css](https://www.w3schools.com/w3css/default.asp) style without JS
- [Font Awesome](https://fontawesome.com/)
- [Shields.IO](https://shields.io/) repo badges

## CONTRIBUTIONS

Solo project so far. Code and graphic design contributors are welcome and encouraged to help. Please read [Contributor Covenant](https://www.contributor-covenant.org/) for details on our code of conduct, and the process for submitting pull requests to me. (I will copy their instructions when I get time, but for now ditto to what they say)

## Authors

- **Tre' Grisby** - _Initial work_ - [trewaters](https://github.com/trewaters)

See also the list of [contributors](https://github.com/BART-CLI/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

- "I tip my hat to anyone whose code was used!" npm gives me a lot of people to thank!
- Special thank you to my mom, wife, and daughter! Without their love and support this would gone nowhere.
- Gratitude is the attitude!

#### NOTES

- Timeline: I started this project on 5/6/2019.
- Goals: jazz it up, add images and animations, specific features: new routes to Antioch, add animation of train on map; 

#### TO DO
[...] set up config files for secret BART API details
  [ ] Heroku Deployment- config files for secret BART API details
  [ ] Local Machine Deployment- config files for secret BART API details
[ ] code api for stations
[ ] code api for ??
[ ] set up database connection
[ ] set up config files for database connection and BART API details
[x] Show list of BART stations for user to select from

# Developer Section

- There is a `Procfile` for Heroku deployments

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `npm run buildRun` for the build and express web server to start. I made this name so it doesn't conflict with my Heroku deployment.

Or Run `ng build` to build the project. 

The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
