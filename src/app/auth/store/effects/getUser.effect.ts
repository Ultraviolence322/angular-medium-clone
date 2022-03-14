import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import { CurrentUserInterface } from "src/app/shared/types/currentUser.interface";
import { AuthService } from "../../services/auth.service";
import { getUserAction, getUserFailureAction, getUserSuccessAction } from "../actions/getUser.action";

@Injectable()
export class GetUserEffect {
  constructor(private actions$: Actions, private authService: AuthService) {}

  getUserEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getUserAction),
      mergeMap(() => {
        const token = '123'
        if(token) {
          return this.authService.checkCurrentUser().pipe(
            map((currentUser: CurrentUserInterface) => {
              return getUserSuccessAction({user: currentUser})
            }),
            catchError(() => {
              return of(getUserFailureAction())
            })
          )
        }
        return of(getUserFailureAction())
      })
      
    )
  })
}