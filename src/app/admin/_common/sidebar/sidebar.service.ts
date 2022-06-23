import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  toggled = false;
  _hasBackgroundImage = false;
  menus = [
    // {
    //   title: 'general',
    //   type: 'header'
    // },
    {
      title: 'Dashboard',
      icon: 'icon-dashboard',
      active: true,
      type: 'simple',
      link: '/admin/dashboard'
    },
    {
      title: 'Counter Booking',
      icon: 'icon-mobile',
      active: false,
      type: 'dropdown',
      submenus: [
        {
          title: 'Current Booking',
          link: '/admin/counter-booking/current-booking'
        },
        {
          title: 'Advance Booking',
          link: '/admin/counter-booking/advance-booking'
        }
      ]
    },
    {
      title: 'Reservation Chart',
      icon: 'icon-pie-chart',
      active: false,
      type: 'simple',
      link: '/admin/reservation-chart'
    },
    {
      title: 'PNR Search',
      icon: 'icon-search',
      active: false,
      type: 'simple',
      link: '/admin/pnr-search'
    },
    {
      title: 'Service List',
      icon: 'icon-list',
      active: false,
      type: 'simple',
      link: '/admin/service-list'
    },
    {
      title: 'Reports',
      icon: 'icon-chart',
      active: false,
      type: 'simple',
      link: '/admin/reports'
    }
  ];
  constructor() { }

  toggle() {
    this.toggled = !this.toggled;
  }

  getSidebarState() {
    return this.toggled;
  }

  setSidebarState(state: boolean) {
    this.toggled = state;
  }

  getMenuList() {
    return this.menus;
  }

  get hasBackgroundImage() {
    return this._hasBackgroundImage;
  }

  set hasBackgroundImage(hasBackgroundImage) {
    this._hasBackgroundImage = hasBackgroundImage;
  }
}
