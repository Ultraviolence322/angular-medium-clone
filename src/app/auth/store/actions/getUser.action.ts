import { createAction, props } from "@ngrx/store";
import { CurrentUserInterface } from "src/app/shared/types/currentUser.interface";
import { ActionTypes } from "../actionTypes";

export const getUserAction =  createAction(
  ActionTypes.GET_USER
)

export const getUserSuccessAction = createAction(
  ActionTypes.GET_USER_SUCCESS,
  props<{user: CurrentUserInterface}>()
)

export const getUserFailureAction = createAction(
  ActionTypes.GET_USER_FAILURE
)