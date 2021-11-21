import { Action, createReducer, on } from '@ngrx/store';
import { Issue } from '../../models/repo.model';
import * as RepoIssuesActions from './repo-issues.actions';

export const repoIssuesFeatureKey = 'repoIssues';

export interface State {
  issues: Issue[];
}

export const initialState: State = {
  issues: [],
};

export const reducer = createReducer(
  initialState,

  on(RepoIssuesActions.loadRepoIssues, (state) => {
    return { ...state, ...initialState };
  }),
  on(RepoIssuesActions.loadRepoIssuesSuccess, (state, { issues }) => {
    return { ...state, issues };
  }),
  on(RepoIssuesActions.loadRepoIssuesFailure, (state, action) => state),

  on(RepoIssuesActions.clearRepoIssues, (state) => {
    return { ...state, ...initialState };
  })
);
