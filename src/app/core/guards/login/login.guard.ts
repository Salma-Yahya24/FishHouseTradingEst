import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { map } from 'rxjs/operators';
import { AuthService } from '../../services/auth/auth.service';

export const loginGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.isLoggedIn$.pipe(
    map((isLoggedIn) => {
      if (isLoggedIn) {
        return router.createUrlTree(['/dashboard']);
      }
      return true; // يسمح بدخول صفحة login
    })
  );
};
