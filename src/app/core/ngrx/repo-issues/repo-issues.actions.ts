import { createAction, props } from '@ngrx/store';
import { Issue } from '../../models/repo.model';

export const loadRepoIssues = createAction(
  '[RepoIssues] Load RepoIssues',
  props<{ fullName: string }>()
);

export const loadRepoIssuesSuccess = createAction(
  '[RepoIssues] Load RepoIsuess Success',
  props<{ issues: Issue[] }>()
);
``;
export const loadRepoIssuesFailure = createAction(
  '[RepoIssues] Load RepoIssues Failure'
);

export const clearRepoIssues = createAction('[RepoIssues] Clear Repo Issues');
