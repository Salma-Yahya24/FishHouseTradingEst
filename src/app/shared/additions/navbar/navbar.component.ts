import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { SidebarService } from '../../../core/sevices/sidebar/sidebar.service';
import { AuthService } from '../../../core/services/auth/auth.service';

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
