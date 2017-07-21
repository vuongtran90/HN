import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, NavigationEnd  } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import 'rxjs/add/operator/filter';

//import Service
import { HNService } from '../services/HNService';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.sass']
})
export class FeedComponent implements OnInit {
  protected typeSub: Subscription;
  protected feedItems: any;
  protected feedType: any;

  constructor(
    protected hnService: HNService,
    protected route: ActivatedRoute,
    protected router: Router
  ) { 
  }

  ngOnInit() {
    this.typeSub = this.route.data
      .subscribe(
        (data: any) => {
        this.feedType = data.feedType
      });
    this.getFeedItems();
  }

  ngOnDestroy() {
      this.typeSub.unsubscribe();
  }

  getFeedItems() {
    this.hnService.getFeed(this.feedType, 1)
        .subscribe(
          feedItems => {
            this.feedItems = feedItems
          },
          error => {
              console.log("Cannot get feed items from API.");
          }
        );

  }
}
