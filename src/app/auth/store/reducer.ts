import { createReducer, on } from "@ngrx/store";
import { AuthStateInterface } from "src/app/shared/types/authState.interface";
import { registerAction, registerFailureAction, registerSuccessAction } from "./actions";

const initialState: AuthStateInterface = {
  isSubmitting: false,
  currentUser: null,
  isLoggedIn: null,
  validationErrors: null
}

export const authReducer = createReducer(
  initialState, 
  on(registerAction, (state): AuthStateInterface => {
    return {
      ...state,
      isSubmitting: true,
      validationErrors: null
    }
  }),
  on(registerSuccessAction, (state, action): AuthStateInterface => {
    return {
      ...state,
      isSubmitting: false,
      isLoggedIn: true,
      currentUser: action.user
    }
  }),
  on(registerFailureAction, (state, action): AuthStateInterface => {
    return {
      ...state,
      isSubmitting: false,
      validationErrors: action.errors
    }
  })
)