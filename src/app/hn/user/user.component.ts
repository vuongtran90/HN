import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
//import Service
import { HNService } from '../services/HNService';
import { User } from '../models/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent implements OnInit {
  userId: any;
  userDetail: User;
  constructor(
    protected hnService: HNService,
    protected route: ActivatedRoute,
    ) { }

  ngOnInit() {
    this.userDetail = new User;

    // Get user id from URL
    this.route.params.forEach((params: Params) => {
        this.userId = params['id'];
    });
    
    this.getUserDetail();
  }

  getUserDetail() {
    this.hnService.getUser(this.userId) 
        .subscribe(
          userDetail => {
            this.userDetail = userDetail;
          },
          error => {

          }
        )
  }

}
