import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '../../../node_modules/@angular/common/http';
import { Flight, IFlight } from '../_models/Flight';
import { Observable } from '../../../node_modules/rxjs';
import { User } from '../_models';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  private resourceUrl = 'http://localhost:8080/FlightDetails';
  private rscUrl = 'http://localhost:8080/getFlightByFlightNumber/';

  constructor(private http: HttpClient) { }

  getFlightDetails(): Observable<IFlight[]>  {
    console.log("Inside getFlightDetails():FlightService")
  // getFlightDetails() {
    //return this.http.get<Flight[]>(`${this.resourceUrl}`, { observe: 'response' });
    return this.http.get<IFlight[]>(this.resourceUrl);
    // return this.http.get<Flight[]>(this.resourceUrl + '/FlightDetails')
  }

  getFlightByFlightNumber(flightNumber: string): Observable<IFlight> {
    return this.http.get<IFlight>(this.rscUrl + flightNumber);
  }
}
