import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of, tap } from "rxjs";
import { CurrentUserInterface } from "src/app/shared/types/currentUser.interface";
import { AuthService } from "../../services/auth.service";
import { loginAction, loginFailureAction, loginSuccessAction } from "../actions/login.action";
import { registerAction, registerFailureAction, registerSuccessAction } from "../actions/register.action";

@Injectable()
export class LoginEffect {
  constructor(
    private actions$: Actions, 
    private authService: AuthService,
    private router: Router
  ) {

  }

  login$ = createEffect(() => {
    return this.actions$
    .pipe(
      ofType(loginAction),
      mergeMap(({request}) => this.authService.login(request)
        .pipe(
          map((currentUser: CurrentUserInterface) => loginSuccessAction({user: currentUser})),
          catchError((errorResponse: HttpErrorResponse) => of(loginFailureAction({errors: errorResponse.error.errors})))
        )
      )
    )
  })

  redirectAfterSubmit$ = createEffect(
    () => this.actions$
      .pipe(
        ofType(loginSuccessAction),
        tap(() => {
          this.router.navigateByUrl('/')
        })
      ),
    {dispatch: false}
  )
}