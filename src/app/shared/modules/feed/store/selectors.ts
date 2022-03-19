import { createFeatureSelector, createSelector } from "@ngrx/store";
import { FeedStateInterface } from "../types/feedState.interface";

export const feedFeatureSelector = createFeatureSelector<FeedStateInterface>('feed')

export const isLoadinSelector = createSelector(
  feedFeatureSelector,
  (feedState: FeedStateInterface) => feedState.isLoading
)

export const feedSelector = createSelector(
  feedFeatureSelector,
  (feedState: FeedStateInterface) => feedState.feed
)

export const errorSelector = createSelector(
  feedFeatureSelector,
  (feedState: FeedStateInterface) => feedState.error
)
