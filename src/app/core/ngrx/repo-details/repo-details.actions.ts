import { createAction, props } from '@ngrx/store';
import { Repo } from '../../models/repo.model';

export const loadRepoDetails = createAction(
  '[RepoDetails] Load RepoDetails',
  props<{ fullName: string }>()
);

export const loadRepoDetailsSuccess = createAction(
  '[RepoDetails] Load RepoDetails Success',
  props<{ repo: Repo }>()
);

export const loadRepoDetailsFailure = createAction(
  '[RepoDetails] Load RepoDetails Failure'
);

export const setRepoDetails = createAction(
  '[RepoDetails] [NF] Set Repo Details',
  props<{ repo: Repo }>()
);
