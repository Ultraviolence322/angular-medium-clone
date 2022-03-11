import { createAction, props } from "@ngrx/store";
import { BackendErrorsInterface } from "src/app/shared/types/backendErrors.interface";
import { CurrentUserResponseInterface } from "src/app/shared/types/currentUserResponse.interface";
import { RegisterRequestInterface } from "src/app/shared/types/registerRequest.interface";
import { ActionTypes } from "./actionTypes";

export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<{request: RegisterRequestInterface}>()
)

export const registerSuccessAction = createAction(
  ActionTypes.REGISTER_SUCCESS,
  props<CurrentUserResponseInterface>()
)

export const registerFailureAction = createAction(
  ActionTypes.REGISTER_FAILURE,
  props<{errors: BackendErrorsInterface}>()
)