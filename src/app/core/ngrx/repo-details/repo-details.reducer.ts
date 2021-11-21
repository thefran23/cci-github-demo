import { Action, createReducer, on } from '@ngrx/store';
import { Repo } from '../../models/repo.model';
import * as RepoDetailsActions from './repo-details.actions';

export const repoDetailsFeatureKey = 'repoDetails';

export interface State {
  repoDetails: Repo;
}

export const initialState: State = {
  repoDetails: null,
};

export const reducer = createReducer(
  initialState,

  on(RepoDetailsActions.loadRepoDetails, (state) => {
    return { ...state, ...initialState };
  }),
  on(RepoDetailsActions.loadRepoDetailsSuccess, (state, { repo }) => {
    return { ...state, repoDetails: repo };
  }),
  on(RepoDetailsActions.loadRepoDetailsFailure, (state, action) => state),

  on(RepoDetailsActions.setRepoDetails, (state, { repo }) => {
    return { ...state, repoDetails: repo };
  })
);
