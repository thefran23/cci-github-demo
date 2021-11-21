import {
  clearRepos,
  loadReposFailure,
  loadReposSuccess,
} from './../core/ngrx/repos/repos.actions';
import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import * as fromRoot from 'src/app/core/ngrx/index';
import { Store } from '@ngrx/store';
import { Actions, ofType } from '@ngrx/effects';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  takeUntil,
  tap,
} from 'rxjs/operators';
import { reposActions } from '../core/ngrx/repos';
import { getRepos } from '../core/ngrx/repos/repos.selectors';
import { Router } from '@angular/router';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.scss'],
})
export class ReposComponent implements OnInit, OnDestroy {
  searchTermControl = new FormControl();
  formCtrlSub: Subscription;
  destroyed$: Subject<void> = new Subject<void>();
  repos$ = this.store.select(getRepos);
  showLoader$ = new BehaviorSubject(false);

  constructor(
    private store: Store<fromRoot.State>,
    private actions$: Actions,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.actions$
      .pipe(takeUntil(this.destroyed$), ofType(clearRepos))
      .subscribe(() => {
        this.showLoader$.next(false);
      });

    this.actions$
      .pipe(
        takeUntil(this.destroyed$),
        ofType(loadReposFailure, loadReposSuccess)
      )
      .subscribe(() => {
        this.showLoader$.next(false);
      });

    this.formCtrlSub = this.searchTermControl.valueChanges
      .pipe(
        takeUntil(this.destroyed$),
        tap(() => this.showLoader$.next(true)),

        debounceTime(500),
        distinctUntilChanged()
      )
      .subscribe((searchTerm: string) =>
        searchTerm.length > 0
          ? this.store.dispatch(reposActions.loadRepos({ searchTerm }))
          : this.store.dispatch(reposActions.clearRepos())
      );
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  clear() {
    this.searchTermControl.setValue('');
  }

  navtoRepoDetails(full_name: string) {
    const fullNameParam = full_name.replace('/', '---');
    this.router.navigate([`repos/${fullNameParam}`]);
  }
}
