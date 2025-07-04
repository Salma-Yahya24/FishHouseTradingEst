import { HttpInterceptorFn } from '@angular/common/http';

export const setHeaderInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('userToken');

  if (token) {
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next(authReq);
  }

  return next(req);
};
