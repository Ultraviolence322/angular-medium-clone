import { Action, createReducer, on } from "@ngrx/store"
import { PopularTagsStateInterface } from "../types/popularTagsState.interface";
import { getPopularTagsAction, getPopularTagsFailureAction, getPopularTagsSuccessAction } from "./actions/getTags.action";

const initialState: PopularTagsStateInterface = {
  isLoading: false,
  tags: null,
  error: null,
}

export const popularTagsReducer = createReducer(
  initialState, 
  on(getPopularTagsAction, (state): PopularTagsStateInterface => {
    return {
      ...state,
      isLoading: true
    }
  }),
  on(getPopularTagsSuccessAction, (state, action): PopularTagsStateInterface => {
    return {
      ...state,
      isLoading: false,
      tags: action.tags
    }
  }),
  on(getPopularTagsFailureAction, (state): PopularTagsStateInterface => {
    return {
      ...state,
      isLoading: false
    }
  })
)

export function reducers(state: PopularTagsStateInterface, action: Action) {
  return popularTagsReducer(state, action);
}