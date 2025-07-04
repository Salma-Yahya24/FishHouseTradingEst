import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth/auth.service';
import { Router } from '@angular/router';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { errorResponse, successResponse } from '../../../core/interfces/login';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  currentYear: number = new Date().getFullYear()
  isLoading: boolean = false;
  constructor(private _AuthService: AuthService, private _Router: Router) {}

  loginForm: FormGroup = new FormGroup({
    userName: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
  });

  isSuccessResponse(
    res: successResponse | errorResponse
  ): res is successResponse {
    return typeof res.data !== 'string'; // لو data مش string يبقى نجح
  }

  submitloginForm() {
  if (this.loginForm.valid) {
    this.isLoading = true;

    this._AuthService.signIn(this.loginForm.value).subscribe({
      next: (res) => {
        if (this.isSuccessResponse(res)) {
          localStorage.setItem('userToken', res.data.token);
          this._AuthService.decodeUserData();
          this._Router.navigate(['dashboard']);
        } else {
          // هنا بنعرض رسالة الخطأ اللي في res.data (لأنها من نوع string)
          alert('فشل تسجيل الدخول: ' + res.data);
        }
        this.isLoading = false;
      },
      error: (err) => {
        this.isLoading = false;

        // نحاول نطبع رسالة الخطأ لو موجودة في body
        const errorMessage =
          err?.error?.data || err?.error?.message || 'حدث خطأ في الاتصال بالخادم';

        alert( errorMessage);
      },
    });
  }
}

}
