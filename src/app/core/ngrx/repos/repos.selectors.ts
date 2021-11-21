import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRepos from './repos.reducer';

export const selectReposState = createFeatureSelector<fromRepos.State>(
  fromRepos.reposFeatureKey
);

export const getRepos = createSelector(selectReposState, (reposState) => {
  return reposState.items;
});
