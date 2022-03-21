import { routerNavigationAction } from "@ngrx/router-store"
import { Action, createReducer, on } from "@ngrx/store"
import { FeedStateInterface } from "../types/feedState.interface"
import { getFeedAction, getFeedFailureAction, getFeedSuccessAction } from "./actions/getFeed.action"

const initialState: FeedStateInterface = {
  isLoading: false,
  feed: null,
  error: null,
}

export const feedReducer = createReducer(
  initialState, 
  on(getFeedAction, (state): FeedStateInterface => {
    return {
      ...state,
      isLoading: true
    }
  }),
  on(getFeedSuccessAction, (state, action): FeedStateInterface => {
    console.log('action', action);
    
    return {
      ...state,
      isLoading: false,
      feed: action.feed
    }
  }),
  on(getFeedFailureAction, (state): FeedStateInterface => {
    return {
      ...state,
      isLoading: false
    }
  }),
  on(routerNavigationAction, (state): FeedStateInterface => {
    return {
      ...initialState
    }
  })
)

export function reducers(state: FeedStateInterface, action: Action) {
  return feedReducer(state, action);
}