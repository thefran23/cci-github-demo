import { ReposService } from './../../services/repos.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, mergeMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';

import * as ReposActions from './repos.actions';

@Injectable()
export class ReposEffects {
  loadRepos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ReposActions.loadRepos),
      // Using mergemap to cancel prev requests
      mergeMap((payload) => {
        return this.repoService.searchReposByName(payload.searchTerm).pipe(
          mergeMap((repos) => {
            return [ReposActions.loadReposSuccess({ repos })];
          })
        );
      }),
      catchError((error) => {
        console.error(error);
        return [ReposActions.loadReposFailure()];
      })
    )
  );

  constructor(private actions$: Actions, private repoService: ReposService) {}
}
