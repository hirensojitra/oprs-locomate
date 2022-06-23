import { Component, OnInit, ViewEncapsulation, Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import { AdminComponent } from '../../admin.component';
import { SidebarService } from '../sidebar/sidebar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
@Injectable({
  providedIn: 'root'
})
export class HeaderComponent implements OnInit {
  public menuStatus: boolean = false;
  constructor(private fb: FormBuilder, private admin:AdminComponent, public sidebarservice: SidebarService) {
    admin.menuStatus = this.menuStatus
  }
  public searchForm = this.fb.group({
    searchInput: new FormControl()
  });
  public toggleMenu(){
    this.admin.toggleSidebar()
  }

  getSideBarState() {
    return this.sidebarservice.getSidebarState();
  }

  public submitForm(): void {
    this.searchForm.markAllAsTouched();
  }

  public clearForm(): void {
    this.searchForm.reset();
  }
  ngOnInit(): void {
    this.clearForm()
    this.admin.menuStatus = this.menuStatus
  }

}
