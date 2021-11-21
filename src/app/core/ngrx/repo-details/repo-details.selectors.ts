import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRepoDetails from './repo-details.reducer';

export const selectRepoDetailsState = createFeatureSelector<fromRepoDetails.State>(
  fromRepoDetails.repoDetailsFeatureKey
);
