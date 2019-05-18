import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
// import { map } from 'rxjs/operators';
// import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class BartTrainApiService {

  constructor(private http: HttpClient) { }

  bartStations() {
    // return this.http.get('https://eastbaytravel.herokuapp.com/bartInfo/stations');
    return this.http.get('/bartInfo/stations'); // This could work too but I don't have time to test it 5/13/2019
    // return this.http.get('http://localhost:4200/bartInfo/stations');
  }

  departTime(vStationAbbr) {
    const params = new HttpParams()
      .set('stationAbbr', vStationAbbr);
    return this.http.get('/bartInfo/trainDepart', { params });
    // return this.http.get('https://eastbaytravel.herokuapp.com/bartInfo/trainDepart', { params });
    // return this.http.get('http://localhost:4200/bartInfo/trainDepart', { params });
  };

  routeSchedule(vOrigin, vDestination) {
    const params = new HttpParams()
      .set('origin', vOrigin)
      .set('destination', vDestination);
    return this.http.get('bartInfo/routeSched', { params });
    // return this.http.get('https://eastbaytravel.herokuapp.com/bartInfo/routeSched', { params });
    // return this.http.get('http://localhost:4200/bartInfo/routeSched', { params });


  }
}

