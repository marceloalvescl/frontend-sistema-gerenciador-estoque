import { MENU_ITEMS } from './constants/menu-titles';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'sge-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'estoque';
  menuItems ;

  ngOnInit(): void {
    this.menuItems = MENU_ITEMS;
  }

}
