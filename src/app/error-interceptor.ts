import {
  HttpErrorResponse,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { errorConfig } from './core/consts/helpers';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private snackbar: MatSnackBar) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = 'An unknown error occurred';
        if (error.error.message) {
          errorMessage = error.error.message;
        }
        this.snackbar.open(errorMessage);
        this.snackbar.open(errorMessage, '×', errorConfig);
        return throwError(error);
      })
    );
  }
}
