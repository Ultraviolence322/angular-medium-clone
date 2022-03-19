import { Injectable } from "@angular/core"
import { Actions, createEffect, ofType } from "@ngrx/effects"
import { catchError, map, mergeMap, of } from "rxjs"
import { FeedService } from "../../services/feed.service"
import { getFeedResponseInterface } from "../../types/getFeedResponse.interface"
import { getFeedAction, getFeedFailureAction, getFeedSuccessAction } from "../actions/getFeed.action"

@Injectable()
export class GetFeedEffect {
  constructor(private actions$: Actions, private feedService: FeedService) {}

  getFeedEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getFeedAction),
      mergeMap((action) => {
          return this.feedService.getFeed(action.url).pipe(
            map((feedResponse: getFeedResponseInterface) => {
              return getFeedSuccessAction({feed: feedResponse})
            }),
            catchError(() => {
              return of(getFeedFailureAction())
            })
          )
      })
    )
  })
}