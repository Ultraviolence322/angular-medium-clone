import { Injectable } from "@angular/core"
import { Actions, createEffect, ofType } from "@ngrx/effects"
import { catchError, map, mergeMap, of } from "rxjs"
import { PopularTagsService } from "../../services/popular-tags.service"
import { getPopularTagsResponseInterface } from "../../types/getPopularTagsResponseInterface.interface"
import { getPopularTagsAction, getPopularTagsFailureAction, getPopularTagsSuccessAction } from "../actions/getTags.action"

@Injectable()
export class getPopularTagsEffect {
  constructor(private actions$: Actions, private popularTagsService: PopularTagsService) {}

  getPopularTagsEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getPopularTagsAction),
      mergeMap((action) => {
          return this.popularTagsService.getPopularTags().pipe(
            map((popularTagsResponse) => {
              return getPopularTagsSuccessAction(popularTagsResponse)
            }),
            catchError(() => {
              return of(getPopularTagsFailureAction())
            })
          )
      })
    )
  })
}