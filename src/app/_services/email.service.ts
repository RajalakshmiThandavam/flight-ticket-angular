import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Email, IEmail } from '../_models/Email';
import { Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http :HttpClient) { }

   private baseUrl = 'http://localhost:8080/mail-sender/email';

  enviarEmail(email :IEmail): Observable<any> {
    console.log("Inside enviarEmail()", email)
    // return this.http.post(`${this.baseUrl}`, email);
    return this.http.post<IEmail>(this.baseUrl, email);
  }
  
}
