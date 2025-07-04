import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

private _isSidebarOpen = new BehaviorSubject<boolean>(true);
  isSidebarOpen$ = this._isSidebarOpen.asObservable();

  toggleSidebar() {
    this._isSidebarOpen.next(!this._isSidebarOpen.value);
  }

  openSidebar() {
    this._isSidebarOpen.next(true);
  }

  closeSidebar() {
    this._isSidebarOpen.next(false);
  }

}
