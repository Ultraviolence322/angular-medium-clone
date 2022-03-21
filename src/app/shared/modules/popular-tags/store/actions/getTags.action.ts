import { createAction, props } from "@ngrx/store";
import { getPopularTagsResponseInterface } from "../../types/getPopularTagsResponseInterface.interface";
import { ActionTypes } from "../actionTypes";

export const getPopularTagsAction = createAction(ActionTypes.GET_POPULAR_TAGS)

export const getPopularTagsSuccessAction = createAction(
  ActionTypes.GET_POPULAR_TAGS_SUCCESS,
  props<getPopularTagsResponseInterface>()
)

export const getPopularTagsFailureAction = createAction(ActionTypes.GET_POPULAR_TAGS_FAILURE)