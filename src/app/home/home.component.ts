import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { AuthenticationService } from '../_services';
import { User } from '../_models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentUser: User;
  loggedOutLabel: Boolean = false;

  constructor(private authenticationService: AuthenticationService) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
   }

  ngOnInit() {
    if(!this.currentUser) {
      this.loggedOutLabel = true;
    }
  }

}
