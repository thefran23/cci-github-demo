import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, mergeMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';

import * as RepoIssuesActions from './repo-issues.actions';
import { ReposService } from '../../services/repos.service';

@Injectable()
export class RepoIssuesEffects {
  loadRepoIssues$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RepoIssuesActions.loadRepoIssues),
      // Using mergemap to cancel prev requests
      mergeMap((payload) => {
        return this.repoService.getIssuesByRepoName(payload.fullName).pipe(
          mergeMap((issues) => {
            return [RepoIssuesActions.loadRepoIssuesSuccess({ issues })];
          })
        );
      }),
      catchError((error) => {
        console.error(error);
        return [RepoIssuesActions.loadRepoIssuesFailure()];
      })
    )
  );
  constructor(private actions$: Actions, private repoService: ReposService) {}
}
