import { Component, OnInit } from '@angular/core';
import { Navigation } from '../../shared/model/header';
import { HNService } from '../../hn/services/HNService';
import { Router, ActivatedRoute, Params, NavigationEnd  } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  protected navigation: any;
  protected feedItems: any;
  protected feedType: any;
  protected typeSub: Subscription;

  constructor(
    protected hnService: HNService,
    protected router: Router,
    protected route: ActivatedRoute,
  ) {
     this.navigation = Navigation;
     
  }

  ngOnInit() {    
  }

  toFeeds() {
  }

  ngOnDestroy() {
      this.typeSub.unsubscribe();
  }
}  