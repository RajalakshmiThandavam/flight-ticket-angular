import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../_models';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { MatSnackBar } from '../../../node_modules/@angular/material';
// import { HttpClient } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

    private loginUrl = 'http://localhost:8080/login/'

    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    private lastActionSubject: BehaviorSubject<Date>;
    public lastAction: Observable<Date>;

    constructor(private http: HttpClient,
        private _snackBar: MatSnackBar) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.lastActionSubject = new BehaviorSubject<Date>(JSON.parse(localStorage.getItem('lastAction')));
        this.currentUser = this.currentUserSubject.asObservable();
        this.lastAction = this.lastActionSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    public get lastActionValue(): Date {
        return this.lastActionSubject.value;
    }

    setCurrentUserToLocal(user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
    }

    setLastActionToLocal(value) {
        localStorage.setItem('lastAction', JSON.stringify(value));
        this.currentUserSubject.next(value);
    }

    login(email: string): Observable<User> {
        console.log("Inside login() @ AuthenticationService")
        console.log("Email:", email)
        return this.http.get<User>(this.loginUrl + email)
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                console.log("User response:", user)
                // if (user && user.token) {
                //     // store user details and jwt token in local storage to keep user logged in between page refreshes
                //     localStorage.setItem('currentUser', JSON.stringify(user));
                //     this.currentUserSubject.next(user);
                // }

                return user;
            }));
    }

    logout() {
        this._snackBar.open( this.currentUserValue.firstName + " " + this.currentUserValue.lastName + " has been", "logged out" ,{ duration: 2000 });
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}
