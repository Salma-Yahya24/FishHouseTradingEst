import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';

import { AuthService } from '../../../core/services/auth/auth.service';
import { SidebarService } from '../../../core/services/sidebar/sidebar.service';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
 constructor(private sidebarService: SidebarService, private _AuthService:AuthService) {}

  toggleSidebar() {
    this.sidebarService.toggleSidebar();
  }
  logout(){
    this._AuthService.logOut();
  }
}
