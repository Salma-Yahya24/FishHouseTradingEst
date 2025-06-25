import { NgIf } from '@angular/common';
import { Component,  OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SidebarService } from '../../../core/sevices/sidebar/sidebar.service';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-sidebar',
  imports: [NgIf,RouterLink,RouterLinkActive,CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {
isSidebarOpen = true;
  isLargeScreen = true;
  openDropdown: string | null = null;

  constructor(
    private sidebarService: SidebarService,
    private breakpointObserver: BreakpointObserver
  ) {}

  ngOnInit(): void {
    this.breakpointObserver.observe(['(min-width: 640px)']).subscribe(result => {
      this.isLargeScreen = result.matches;
      this.isSidebarOpen = result.matches;
    });

    this.sidebarService.isSidebarOpen$.subscribe(open => {
      this.isSidebarOpen = open || this.isLargeScreen;
    });
  }

  toggleDropdown(menu: string) {
    this.openDropdown = this.openDropdown === menu ? null : menu;
  }

  closeSidebar() {
    if (!this.isLargeScreen) {
      this.sidebarService.closeSidebar();
    }
  }
}
