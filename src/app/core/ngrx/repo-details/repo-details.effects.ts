import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, mergeMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';

import * as RepoDetailsActions from './repo-details.actions';
import { ReposService } from '../../services/repos.service';

@Injectable()
export class RepoDetailsEffects {
  loadRepoDetails$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RepoDetailsActions.loadRepoDetails),
      // Using mergemap to cancel prev requests
      mergeMap((payload) => {
        return this.repoService.getRepoByFullName(payload.fullName).pipe(
          mergeMap((repo) => {
            return [RepoDetailsActions.loadRepoDetailsSuccess({ repo })];
          })
        );
      }),
      catchError((error) => {
        console.error(error);
        return [RepoDetailsActions.loadRepoDetailsFailure()];
      })
    )
  );

  constructor(private actions$: Actions, private repoService: ReposService) {}
}
