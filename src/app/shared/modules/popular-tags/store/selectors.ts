import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PopularTagsStateInterface } from "../types/popularTagsState.interface";

export const popularTagsFeatureSelector = createFeatureSelector<PopularTagsStateInterface>('popular-tags')

export const isLoadingSelector = createSelector(
  popularTagsFeatureSelector,
  (popularTagsState: PopularTagsStateInterface) => popularTagsState.isLoading
)

export const popularTagsSelector = createSelector(
  popularTagsFeatureSelector,
  (popularTagsState: PopularTagsStateInterface) => popularTagsState.tags
)

export const errorSelector = createSelector(
  popularTagsFeatureSelector,
  (popularTagsState: PopularTagsStateInterface) => popularTagsState.error
)
