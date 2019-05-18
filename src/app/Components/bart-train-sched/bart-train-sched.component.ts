import { Component, OnInit } from '@angular/core';
import { BartTrainApiService } from 'src/app/Services/bart-train-api.service';
// import { Router } from '@angular/router';


@Component({
  selector: 'app-bart-train-sched',
  templateUrl: './bart-train-sched.component.html',
  styleUrls: ['./bart-train-sched.component.css']
})
export class BartTrainSchedComponent implements OnInit {

  vStations: string[] = [];
  vStationsAbbr: string[] = [];

  vNew: any = null;

  yahStation: string = '';
  desStation: string = '';
  // yahStation: string = 'North Berkeley';
  // desStation: string = '19th St. Oakland';

  vMessage: string = 'Enter BART Station...';

  vDepartureTime: any = {};
  vGetSchedule: any = {};

  vTripStations: any = ''; // trip route stations

  vTest: any = null; // variable for arbitrary testing

  constructor(private trainSched: BartTrainApiService) {
        // get departure time for default locations
      //   let vDepartureSchedule: any;
      //   vDepartureSchedule = trainSched.departTime('NBRK').subscribe((data: any)=>{
      //     this.vDepartureTime = data;
      // });

      // get default route schedule
      // let vSchedule: any;
      // vSchedule = trainSched.routeSchedule('NBRK','19TH').subscribe((data: any)=>{
      //   this.vGetSchedule = data.root;
      //   console.log('this.vGetSchedule...',this.vGetSchedule);
      // })

  }

  /*
    // test code for another style of route navigation
    // constructor(private trainSched: BartTrainApiService, private router: Router) { }
    navigateTo(to: string) {
      this.router.navigateByUrl(to);
      // this.router.navigate(['/', 'first']);
    }
   */
  ngOnInit() {

    // Load all available BART stations
    this.vNew = this.trainSched.bartStations().subscribe((data) => {
      let vData: any = data;
      let vDataLen = vData.root.stations.station.length;
      for (var a = 0; a < vDataLen; a++) {
        this.vStations[a] = vData.root.stations.station[a].name; // full station name (Fremont)
        this.vStationsAbbr[vData.root.stations.station[a].name] = vData.root.stations.station[a].abbr; // abbreviated station name (FRMT)
      };
    });
  }

  /**
   * Make a request to the BART API for the current departure times based on the user's selection
   * Get's station name from the user selection on the webpage.
   * Set data for "vDepartureTime"
   */
  departTimeYah() {
    let vDepartStationAbbr: string = '';
    vDepartStationAbbr = this.vStationsAbbr[this.yahStation] // get the abbreviation of the full name
    let vDepartureSchedule: any;

    vDepartureSchedule = this.trainSched.departTime(vDepartStationAbbr).subscribe((data: any) => {

      this.vDepartureTime = data;

      /*

      this.vDepartureTime.station[0].name; // name of the departing station
      this.vDepartureTime.station[0].etd; // departing train array (access to destination, abbreviation, estimate[0]-(access to minutes, platform, direction, length, color, delay, bikeflag, hexcolor))
      this.vDepartureTime.message; // message from BART
      this.vDepartureTime.date; // date the user requested info
      this.vDepartureTime.time;// time the user requested info
      */

      // this.vMessage = `BART train schedule requested on ${data['root']['date']} at ${data['root']['time']}.`
      this.vMessage = `BART train schedule requested on ${this.vDepartureTime.date} at ${this.vDepartureTime.time}.`

      // console.log('vDepartureTime...', this.vDepartureTime);
      // console.log("data['root'];", data['root']);

      // console.log("data['root']['station'][0]['name'];", data['root']['station'][0]['name']); // name of the departing station
      // console.log("data['root']['station'][0]['etd'];", data['root']['station'][0]['etd']); // array of all the departing trains.(access to minutes, platform, direction, length, color, delay, bikeflag, hexcolor) for each

      // console.log("data['root']['station'][0]['etd'][0]['destination'];", data['root']['station'][0]['etd'][0]['destination']);
      // console.log("data['root']['station'][0]['etd'][0]['estimate'][0]['minutes'];", data['root']['station'][0]['etd'][0]['estimate'][0]['minutes']);
      // console.log("data['root']['station'][0]['etd'][0]['estimate'][0]['minutes'];", data['root']['station'][0]['etd'][0]['estimate'][0]['length']);

    })


    // vDepartureSchedule.root.time // time of the user's request
    // vDepartureSchedule.root.date // date of the user's request
    // vDepartureSchedule.root.message // BART messages
    // vDepartureSchedule.root.station[0].abbr // the departing station abbreviation
    // vDepartureSchedule.root.station[0].name // the departing station full name
    // vDepartureSchedule.root.station[0].etd[0].destination
    // vDepartureSchedule.root.station[0].etd[0].estimate[0].minutes
    // vDepartureSchedule.root.station[0].etd[0].estimate[0].platform
    // vDepartureSchedule.root.station[0].etd[0].estimate[0].direction
    // vDepartureSchedule.root.station[0].etd[0].estimate[0].length
    // vDepartureSchedule.root.station[0].etd[0].estimate[0].color
    // vDepartureSchedule.root.station[0].etd[0].estimate[0].bikeflag
    // vDepartureSchedule.root.station[0].etd[0].estimate[0].hexcolor
    // vDepartureSchedule.root.station[0].etd[0].estimate[0].delay

    // Using the abbreviated name of the BART train station search for the Departure time
    // Return the departure time and name of the station
  }

  /**
   * stores user origin based on selection from input dropdown list.
   *
   * @param event is user's input from the dropdown list provided.
   */
  bindYah(event: any) {
    this.yahStation = event.target.value;
  }
  /**
    * stores user destination based on selection from input dropdown list.
    *
    * @param event is user's input from the dropdown list provided.
    */
  bindDes(event: any) {
    this.desStation = event.target.value;
  }

  getSchedule() {

    let vOrigin: any = null;
    let vDestination: any = null;

    // check that the origin and destination have values
    if (this.yahStation.length > 1) { vOrigin = this.vStationsAbbr[this.yahStation] }
    if (this.desStation.length > 1) { vDestination = this.vStationsAbbr[this.desStation] }


    // console.log('getSchedule...vDestination',vDestination);

    // console.log('getSchedule...vOrigin',vOrigin);
    // vOrigin = this.vStationsAbbr[this.yahStation];
    // vDestination = this.vStationsAbbr[this.desStation];

    let vSchedule: any;

    vSchedule = this.trainSched.routeSchedule(vOrigin, vDestination).subscribe((data: any) => {
      this.vGetSchedule = data.root;

      /*
      this.vGetSchedule.schedule.trip[0].length; // length of trip, if length > 1 there is a transfer
      let tripLength = this.vGetSchedule.schedule.trip[0].leg.length;
      console.log("this.vGetSchedule.schedule.trip[0].leg.length...",this.vGetSchedule.schedule.trip[0].leg.length)

      // list of important data in variable
      this.vGetSchedule.schedule.date; // date of user request
      this.vGetSchedule.schedule.time; // time of user request
      this.vGetSchedule.schedule.request.trip[0] // trip details, first in the array is the next trip

      this.vGetSchedule[schedule][request][trip][0]['@origTimeMin']; // time route is departing origin
      this.vGetSchedule[schedule][request][trip][0]['@destTimeMin']; // time route is arriving at destination

      this.vGetSchedule.schedule.request.trip[0].leg[0]; // each leg in the array is part of the entire route trip
*/

      this.vTripStations = ';'

      for (var a = 0; a < this.vGetSchedule.legLength; a++) {
        if (this.vGetSchedule.legLength > 1) {
          this.vTripStations += `${a + 1}) Get on train at ${data['root']['schedule']['request']['trip'][0]['leg'][a]['@origin']} and transfer at ${data['root']['schedule']['request']['trip'][0]['leg'][a]['@destination']}. `;
        } else {
          this.vTripStations = `Get on train at ${data['root']['schedule']['request']['trip'][0]['leg'][a]['@origin']} and transfer at ${data['root']['schedule']['request']['trip'][0]['leg'][a]['@destination']}.`;
        }
      }
    });

  }

};
