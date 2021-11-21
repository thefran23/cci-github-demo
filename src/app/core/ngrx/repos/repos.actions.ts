import { createAction, props } from '@ngrx/store';
import { Repo } from '../../models/repo.model';

export const loadRepos = createAction(
  '[Repos] Load Repos',
  props<{ searchTerm: string }>()
);

export const loadReposSuccess = createAction(
  '[Repos] Load Repos Success',
  props<{ repos: Repo[] }>()
);

export const loadReposFailure = createAction('[Repos] Load Repos Failure');

export const clearRepos = createAction('[Repos NF] Clear Repos');
