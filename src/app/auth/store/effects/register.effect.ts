import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";

import { catchError, map, mergeMap, of, tap } from "rxjs";
import { LocalStorageApiService } from "src/app/shared/services/local-sotage-api/local-storage-api.service";
import { CurrentUserInterface } from "src/app/shared/types/currentUser.interface";
import { AuthService } from "../../services/auth.service";
import { registerAction, registerFailureAction, registerSuccessAction } from "../actions/register.action";

@Injectable()
export class RegisterEffect {
  constructor(
    private actions$: Actions, 
    private authService: AuthService,
    private localStorageApi: LocalStorageApiService,
    private router: Router
  ) {

  }

  register$ = createEffect(() => {
    return this.actions$
    .pipe(
      ofType(registerAction),
      mergeMap(({request}) => this.authService.register(request)
        .pipe(
          map((currentUser: CurrentUserInterface) => {
            this.localStorageApi.setData('auth-token', currentUser.token)
            return registerSuccessAction({user: currentUser})
          }),
          catchError((errorResponse: HttpErrorResponse) => of(registerFailureAction({errors: errorResponse.error.errors})))
        )
      )
    )
  })

  redirectAfterSubmit$ = createEffect(
    () => this.actions$
      .pipe(
        ofType(registerSuccessAction),
        tap(() => {
          this.router.navigateByUrl('/')
        })
      ),
    {dispatch: false}
  )
}