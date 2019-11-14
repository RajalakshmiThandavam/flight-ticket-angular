import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { AuthenticationService, AlertService } from './_services';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from './_models';
import { BehaviorSubject, Observable } from '../../node_modules/rxjs';
import { MatSnackBar } from '../../node_modules/@angular/material';
import { AutoLogoutService } from './_services/auto-logout.service';
import { Role } from './_models/Role';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  username: string;
  password: string;
  returnUrl: string;
  currentUser: User;
  loggedInAsAdmin: Boolean;

  constructor(public dialog: MatDialog,
    private authenticationService: AuthenticationService,
    private alertService: AlertService,
    private router: Router,
    private route: ActivatedRoute,
    // private autoLogout: AutoLogoutService
    ) {
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit() {
    if(this.currentUser.role == Role.Admin)
      this.loggedInAsAdmin = true;
    else
      this.loggedInAsAdmin = false;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      // width: '250px',
      data: {username: this.username, password: this.password},
      width: '300px',
      height: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log('Result:', result)
      if(result) {
        // this.username = result.username;
        // this.password = result.password;

        this.authenticationService.login(result.username)
              .pipe(first())
              .subscribe(
                  data => {
                    if(data.email == result.username && data.password == result.password) {
                      if (data && data.token) {
                        this.authenticationService.setCurrentUserToLocal(data);
                        // this.router.navigate(['flight-details']);
                      }
                    }
                  },
                  error => {
                      this.alertService.error(error);
                      // this.loading = false;
                  });
        }
    });
  }

  logout() {
    this.router.navigate(['home'])
    this.authenticationService.logout();
    // this.openDialog();
    // this._snackBar.open( this.currentUser.firstName + "has been", "logged out" ,{ duration: 2000 });
  }
}
