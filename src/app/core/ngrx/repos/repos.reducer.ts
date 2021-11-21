import { Action, createReducer, on } from '@ngrx/store';
import { Repo } from '../../models/repo.model';
import * as ReposActions from './repos.actions';

export const reposFeatureKey = 'repos';

export interface State {
  total_count: number;
  incomplete_results: boolean;
  items: Repo[];
}

export const initialState: State = {
  total_count: 0,
  incomplete_results: false,
  items: [],
};

export const reducer = createReducer(
  initialState,

  on(ReposActions.loadRepos, (state) => {
    return { ...state, ...initialState };
  }),
  on(ReposActions.loadReposSuccess, (state, { repos }) => {
    return { ...state, ...repos };
  }),
  on(ReposActions.loadReposFailure, (state, action) => state),

  on(ReposActions.clearRepos, (state) => {
    return { ...state, ...initialState };
  })
);
