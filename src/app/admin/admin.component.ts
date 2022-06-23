import { Component, OnInit, Injectable } from '@angular/core';
import { SidebarService } from './_common/sidebar/sidebar.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  public menuStatus: boolean = false
  constructor(public sidebarservice: SidebarService) {
  }
  toggleSidebar() {
    this.sidebarservice.setSidebarState(!this.sidebarservice.getSidebarState());
    return false;
  }
  toggleBackgroundImage() {
    this.sidebarservice.hasBackgroundImage = !this.sidebarservice.hasBackgroundImage;
    return false;
  }
  getSideBarState() {
    return this.sidebarservice.getSidebarState();
  }

  hideSidebar() {
    this.sidebarservice.setSidebarState(true);
    return false;
  }
  ngOnInit(): void {
  }

}
