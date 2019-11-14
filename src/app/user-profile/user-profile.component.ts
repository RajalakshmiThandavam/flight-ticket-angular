import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { User } from '../_models';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  userId: string;
  sideNavOpenned: Boolean = true;

  constructor(private activatedRoute: ActivatedRoute) { 
    this.userId = this.activatedRoute.snapshot.paramMap.get('id')
  }

  ngOnInit() {
    console.log("User profile Id:", this.userId)
  }

}
