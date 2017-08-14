import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, NavigationEnd  } from '@angular/router';
import { Item } from '../models/Item';
//import Service
import { HNService } from '../services/HNService';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.sass']
})
export class ItemComponent implements OnInit {
  itemId: number;
  item: Item;

  constructor(
    protected route: ActivatedRoute,
    protected hnService: HNService,
  ) { }

  ngOnInit() {
    // Get Item id from URL
    this.route.params.forEach((params: Params) => {
      this.itemId = params['id'];
    });
    this.getItemDetail();
  }
  
  getItemDetail() {
    this.hnService.getItem(this.itemId)
        .subscribe(
          item => {
            this.item = item
          },
          error => {

          }
        )
  }
}
