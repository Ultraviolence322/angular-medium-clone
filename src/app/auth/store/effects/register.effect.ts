import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of, tap } from "rxjs";
import { CurrentUserResponseInterface } from "src/app/shared/types/currentUserResponse.interface";
import { AuthService } from "../../services/auth.service";
import { registerAction, registerFailureAction, registerSuccessAction } from "../actions";

@Injectable()
export class RegisterEffect {

  register$ = createEffect(() => {
    return this.actions$
    .pipe(
      ofType(registerAction),
      mergeMap(({request}) => this.authService.register(request)
        .pipe(
          map((currentUser: CurrentUserResponseInterface) => registerSuccessAction(currentUser)),
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

  constructor(
    private actions$: Actions, 
    private authService: AuthService,
    private router: Router
  ) {

  }
}