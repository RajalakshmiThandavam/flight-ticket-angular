import { Injectable, NgZone } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';
import { Observable, BehaviorSubject } from '../../../node_modules/rxjs';
import { AuthenticationService } from './authentication.service';

// const store = require('store');

const MINUTES_UNITL_AUTO_LOGOUT = 1 // in mins
const CHECK_INTERVAL = 1000 // in ms
// const STORE_KEY =  'lastAction';


@Injectable({
  providedIn: 'root'
})

export class AutoLogoutService {

  auth: any;
  private lastActionSubject: BehaviorSubject<Date>;
  public lastAction: Observable<Date>;
  lastActionValueInMinutes: number;


  constructor(authService: AuthenticationService,
    private ngZone: NgZone,
    private router: Router
  ) { 
    this.auth = authService;
    this.check();
    this.initListener();
    this.initInterval();

    this.lastActionSubject = new BehaviorSubject<Date>(JSON.parse(localStorage.getItem('lastAction')));
        this.lastAction = this.lastActionSubject.asObservable();
  }

  public get lastActionValue(): Date {
    return this.lastActionSubject.value;
  }

  setlastActionToLocal(date) {
    localStorage.setItem('lastAction', JSON.stringify(date));
    this.lastActionSubject.next(date);
  }

  initListener() {
    this.ngZone.runOutsideAngular(() => {
      document.body.addEventListener('click', () => this.reset());
    });
  }

  reset() {
    this.setlastActionToLocal(Date.now);
  }

  initInterval() {
    this.ngZone.runOutsideAngular(() => {
      setInterval(() => {
        this.check();
      }, CHECK_INTERVAL);
    });
  }

  check() {
    const now = Date.now();
    this.lastActionValueInMinutes = this.lastActionValue.getHours()*60 + this.lastActionValue.getMinutes();
    const timeleft = this.lastActionValueInMinutes + MINUTES_UNITL_AUTO_LOGOUT * 60 * 1000;
    const diff = timeleft - now;
    const isTimeout = diff < 0;

    this.ngZone.run(() => {
      if (isTimeout && this.auth.loggedIn) {
        this.auth.logout();
        this.router.navigate(['']);
      }
    });
  }
}
