import { Component, OnInit } from '@angular/core';
import { FooterMenu } from '../../shared/model/footer';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {
  private footerMenu: any
  constructor(

  ) {
    this.footerMenu = FooterMenu
  }

  ngOnInit() {
  }

}
