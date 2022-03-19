import { createReducer, on } from "@ngrx/store";
import { AuthStateInterface } from "../types/authState.interface";
import { getUserAction, getUserFailureAction, getUserSuccessAction } from "./actions/getUser.action";
import { loginAction, loginFailureAction, loginSuccessAction } from "./actions/login.action";
import { registerAction, registerFailureAction, registerSuccessAction } from "./actions/register.action";

const initialState: AuthStateInterface = {
  isLoading: false,
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
  }),
  on(loginAction, (state): AuthStateInterface => {
    return {
      ...state,
      isSubmitting: true,
      validationErrors: null
    }
  }),
  on(loginSuccessAction, (state, action): AuthStateInterface => {
    return {
      ...state,
      isSubmitting: false,
      isLoggedIn: true,
      currentUser: action.user
    }
  }),
  on(loginFailureAction, (state, action): AuthStateInterface => {
    return {
      ...state,
      isSubmitting: false,
      validationErrors: action.errors
    }
  }),
  on(getUserAction, (state): AuthStateInterface => {
    return {
      ...state,
      isLoading: true
    }
  }),
  on(getUserSuccessAction, (state, action): AuthStateInterface => {
    return {
      ...state,
      isLoading: false,
      currentUser: action.user,
      isLoggedIn: true
    }
  }),
  on(getUserFailureAction, (state): AuthStateInterface => {
    return {
      ...state,
      isLoading: false,
      isLoggedIn: false,
      currentUser: null,
    }
  })
)