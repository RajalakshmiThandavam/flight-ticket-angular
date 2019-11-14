import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services';
import { User } from '../_models';
import { Router, ActivatedRoute } from '../../../node_modules/@angular/router';
import { Role } from '../_models/Role';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  // username: string;
  // user: User;

  id: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  token: string;
  email: string;
  address: string;
  phoneNumber: number;
  gender: string;
  flightId: number;
  dateOfBirth: Date;
  role: Role


  user: User = new User(
    this.firstName,
    this.lastName,
    this.email,
    this.password,
    this.dateOfBirth,
    this.phoneNumber,
    this.token,
    this.role,
  
  );

  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit() {

  //   this.activatedRoute.data.subscribe(({ user }) => {
  //     this.user = user;
  // });
  }

  save() {
    console.log("Inside Save()")
    this.user.role = Role.User;
    this.userService.saveUser(this.user)
            // .pipe(first())
            .subscribe(
                data => {
                    // this.alertService.success('Registration successful', true);
                    console.log("Saving....")
                    this.router.navigate(['/flight-details']);
                },
                error => {
                    // this.alertService.error(error);
                    // this.loading = false;
                });
  }

}
