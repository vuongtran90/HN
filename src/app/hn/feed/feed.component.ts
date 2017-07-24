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
  protected pageSub: Subscription;
  protected feedItems: any;
  protected feedType: any;
  protected feedStart: number;
  protected pageNumber: number;

  constructor(
    protected hnService: HNService,
    protected route: ActivatedRoute,
    protected router: Router
  ) { 
  }

  ngOnInit() {

    this.route.params.forEach((params: Params) => {
      this.pageNumber = params['page'] ? + params['page'] : 1;
    });

    //Subscription typefeed
    this.typeSub = this.route.data
      .subscribe(
        (data: any) => {
        this.feedType = data.feedType
      });

    //Subscription page
    this.pageSub = this.route.params.subscribe(
      params => {
        this.pageNumber = params['page'] ? +params['page'] : 1;
        this.feedStart = (this.pageNumber -1) * 30 + 1;
        this.getFeedItems();
        window.scrollTo(0, 0)
      }
    );

    this.getFeedItems();
  }

  ngOnDestroy() {
      this.typeSub.unsubscribe();
  }

  getFeedItems() {
    this.hnService.getFeed(this.feedType, this.pageNumber)
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
