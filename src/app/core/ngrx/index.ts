//#region Imports
import { ActionReducerMap } from '@ngrx/store';
import {
  reposState,
  reposReducer,
  reposSelectors as _reposSelectors,
} from './repos/index';

import {
  repoDetailsState,
  repoDetailsReducer,
  repoDetailsSelectors as _repoDetailsSelectors,
} from './repo-details/index';
import { repoIssuesReducer, repoIssuesState } from './repo-issues';

export interface State {
  repos: reposState;
  selectedRepo: repoDetailsState;
  selectedRepoIssues: repoIssuesState;
}

export const reducers: ActionReducerMap<State> = {
  repos: reposReducer,
  selectedRepo: repoDetailsReducer,
  selectedRepoIssues: repoIssuesReducer,
};

export const reposSelectors = _reposSelectors;
export const repoDetailsSelectors = _repoDetailsSelectors;
