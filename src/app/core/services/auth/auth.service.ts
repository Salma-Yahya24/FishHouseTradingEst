import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { errorResponse, Login, successResponse } from '../../interfces/login';
import { enviroment } from '../../../enviroment';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { jwtDecode, JwtPayload } from "jwt-decode";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  userData: BehaviorSubject<null | JwtPayload> = new BehaviorSubject<null | JwtPayload>(null);

  constructor(
    private _HttpClient: HttpClient,
    @Inject(PLATFORM_ID) private Id: object,
    private _Router: Router
  ) {
    if (isPlatformBrowser(Id)) {
      const token = localStorage.getItem('userToken');
      if (token) {
        this.decodeUserData();
        this.isLoggedInSubject.next(true);
      }
    }
  }

  signIn(data: Login): Observable<successResponse | errorResponse> {
    return this._HttpClient.post<successResponse | errorResponse>(
      `${enviroment.baseUrl}Account/Login`,
      data
    );
  }

  decodeUserData() {
    try {
      const token = localStorage.getItem('userToken') || '';
      const decoded = jwtDecode(token);
      this.userData.next(decoded);
      this.isLoggedInSubject.next(true);
    } catch (err) {
      this.logOut(); // لو التوكن مش سليم
    }
  }

  logOut() {
    localStorage.removeItem('userToken');
    this.userData.next(null);
    this.isLoggedInSubject.next(false);
    this._Router.navigate(['login']);
  }

  // في حالة احتجتِ تعمل تسجيل دخول يدوي بدون API (غير ضروري الآن)
  setLoginStatus(status: boolean) {
    this.isLoggedInSubject.next(status);
  }
}
