import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../_models';
import { Observable } from '../../../node_modules/rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    private saveUserUrl = 'http://localhost:8080/saveUser';

  constructor(private http: HttpClient) { }

  saveUser(user: User): Observable<User>  {
    // getFlightDetails() {
        console.log("Inside saveUser() service", user)
    //   return this.http.post<User>(`${this.saveUserUrl}`, { observe: 'response' });
      return this.http.post<User>(this.saveUserUrl, user);
      // return this.http.get<Flight[]>(this.resourceUrl + '/FlightDetails')
    }

   
}
