import { loadRepoDetails } from './../core/ngrx/repo-details/repo-details.actions';
import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { take, concatMap, tap } from 'rxjs/operators';
import * as fromRoot from 'src/app/core/ngrx/index';
import {
  loadRepoDetailsSuccess,
  setRepoDetails,
} from '../core/ngrx/repo-details/repo-details.actions';
import { routeParamToFullName } from '../core/consts/helpers';

@Injectable({
  providedIn: 'root',
})
export class RepoDetailsResolver implements Resolve<boolean> {
  constructor(private store: Store<fromRoot.State>) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    const paramRepoFullName = routeParamToFullName(
      route.params['repoFullName']
    );

    return this.store.pipe(
      take(1),
      concatMap((store) => {
        const repoDetails = store.repos.items.find(
          (repo) => repo.full_name === paramRepoFullName
        );
        // If the repo already exists in state, we do not have to fetch it again
        if (repoDetails) {
          this.store.dispatch(setRepoDetails({ repo: repoDetails }));
          return of(true);
        }
        // If the repo does not exist in state, we have to fetch it (I.e the user was deep linked to the details view page)
        return of(true).pipe(
          tap(() =>
            this.store.dispatch(
              loadRepoDetails({ fullName: paramRepoFullName })
            )
          )
        );
      })
    );
  }
}
