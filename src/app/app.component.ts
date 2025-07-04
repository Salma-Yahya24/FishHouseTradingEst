import { Component, inject, PLATFORM_ID, computed, Signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NavbarComponent } from "./shared/additions/navbar/navbar.component";
import { isPlatformBrowser } from '@angular/common';
import { AuthService } from './core/services/auth/auth.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { SidebarComponent } from './shared/additions/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  readonly isLoggedIn: Signal<boolean>;

  constructor() {
    const platformId = inject(PLATFORM_ID);
    const authService = inject(AuthService);

    // فقط لو على المتصفح (مش SSR مثلاً)
    if (isPlatformBrowser(platformId)) {
      // تحويل Observable لـ Signal للقراءة فقط
      this.isLoggedIn = toSignal(authService.isLoggedIn$, { initialValue: false });
    } else {
      // fallback default في حالة SSR
      this.isLoggedIn = computed(() => false);
    }
  }

  title = 'FishHouseTradingEst';
}
