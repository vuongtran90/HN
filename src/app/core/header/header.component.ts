import { Component, OnInit } from '@angular/core';
import { Navigation } from '../../shared/model/header';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  protected navigation: any;

  constructor(
  ) {
     this.navigation = Navigation;
     
  }

  ngOnInit() {    
  }
}  