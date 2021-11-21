import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRepoIssues from './repo-issues.reducer';

export const selectRepoIssuesState =
  createFeatureSelector<fromRepoIssues.State>(
    fromRepoIssues.repoIssuesFeatureKey
  );

// export const getRepoIssues = createSelector(
//   selectRepoIssuesState,
//   (repoIssuesState) => {
//     console.log('repoIssuesState ', repoIssuesState);
//     return repoIssuesState.issues;
//   }
// );

export const getRepoIssues = createSelector(
  selectRepoIssuesState,
  (repoIssuesState) => {
    return repoIssuesState;
  }
);
