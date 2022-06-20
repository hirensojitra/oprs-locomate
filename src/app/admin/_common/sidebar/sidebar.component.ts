import { Component, OnInit } from '@angular/core';
import data from "./sidebar.json";
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  result: any = [];
  constructor() {
    for (let key in data.navitems) {
      if (data.navitems.hasOwnProperty(key)) {
        this.result.push(data.navitems[key]);
      }
    }
  }
  ngOnInit(): void {
  }
  ddToggle(i: any) {
    this.result[i].menu = !this.result[i].menu;
    console.log(this.result[i].menu);
  }
}
