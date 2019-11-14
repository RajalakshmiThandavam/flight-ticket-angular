import { Component, OnInit, Inject, Output, Input, EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthenticationService, AlertService } from '../_services';
import { first } from 'rxjs/operators';
import { Router } from '../../../node_modules/@angular/router';
import { MatSnackBar } from '../../../node_modules/@angular/material';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent  {

  hide = true;

  @Output() loggedIn =  new EventEmitter();
  @Input() enabled = true;

  constructor(
    public dialogRef: MatDialogRef<LoginDialogComponent>,
    private authenticationService: AuthenticationService,
    private alertService: AlertService,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _snackBar: MatSnackBar
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  login() {
    console.log("LoginDialog data:", this.data)
    if(this.data) {
      this.authenticationService.login(this.data.username)
            .pipe(first())
            .subscribe(
                res => {
                  if(res.email == this.data.username && res.password == this.data.password) {
                    if (res && res.token) {
                      this.authenticationService.setCurrentUserToLocal(res);
                      this.dialogRef.close();
                      this.router.navigate(['flight-details']);
                    }
                  }
                },
                error => {
                  console.log("Login alert:")
                    this.alertService.error(error);
                    
                    // this.loading = false;
                });
      }
    console.log("Inside login() @LoginDialogComponent:", this.data.username)

    this._snackBar.open( "Logged in as" , this.data.username ,{ duration: 2000 });
  }


}
