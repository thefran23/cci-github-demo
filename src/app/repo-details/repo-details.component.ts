import { BehaviorSubject, combineLatest, of, Subject } from 'rxjs';
import {
  clearRepoIssues,
  loadRepoIssues,
  loadRepoIssuesFailure,
  loadRepoIssuesSuccess,
} from './../core/ngrx/repo-issues/repo-issues.actions';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from 'src/app/core/ngrx/index';
import { ActivatedRoute } from '@angular/router';
import { take, takeUntil, map } from 'rxjs/operators';
import { Actions, ofType } from '@ngrx/effects';
import { routeParamToFullName } from '../core/consts/helpers';

import { ChartComponent } from 'ng-apexcharts';

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};
@Component({
  selector: 'app-repo-details',
  templateUrl: './repo-details.component.html',
  styleUrls: ['./repo-details.component.scss'],
})
export class RepoDetailsComponent implements OnInit, OnDestroy {
  destroyed$: Subject<void> = new Subject<void>();
  issueFilter$ = new BehaviorSubject('all');

  //Short hand notation.
  repoDetails$ = this.store.select((s) => s.selectedRepo.repoDetails);
  repoIssues$ = this.store.select((s) => s.selectedRepoIssues.issues);

  filteredIssues$ = this.getFilteredIssues();
  issuesLoading$ = new BehaviorSubject(true);
  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor(
    private store: Store<fromRoot.State>,
    private route: ActivatedRoute,
    private actions$: Actions
  ) {}

  ngOnInit(): void {
    this.actions$
      .pipe(
        takeUntil(this.destroyed$),
        ofType(loadRepoIssuesSuccess, loadRepoIssuesFailure)
      )
      .subscribe(() => {
        this.issuesLoading$.next(false);
      });

    this.repoIssues$
      .pipe(takeUntil(this.destroyed$))
      .subscribe((repoIssues) => {
        this.chartOptions = {
          series: [
            repoIssues.filter((issues) => issues.state === 'open').length,
            repoIssues.filter((issues) => issues.state === 'closed').length,
          ],
          chart: {
            width: 380,
            type: 'pie',
          },
          labels: ['Open Issues', 'Closed Issues'],
          responsive: [
            {
              breakpoint: 480,
              options: {
                chart: {
                  width: 200,
                },
                legend: {
                  position: 'bottom',
                },
              },
            },
          ],
        };
      });
  }

  // To reduce api calls repo issues are only loaded when needed, and not every time the user lands on the page
  loadIssues(event: any) {
    const fullName = routeParamToFullName(
      this.route.snapshot.params['repoFullName']
    );
    this.store
      .select((s) => s.selectedRepoIssues.issues)
      .pipe(take(1))
      .subscribe((issues) => {
        if (issues.length === 0) {
          this.store.dispatch(loadRepoIssues({ fullName }));
        }
      });
  }

  updateFilter(filter: string) {
    this.issueFilter$.next(filter);
  }

  getFilteredIssues() {
    return combineLatest([this.issueFilter$, this.repoIssues$]).pipe(
      map(([issueFilter, repoIssues]) => {
        if (issueFilter === 'all') {
          return repoIssues;
        }
        return repoIssues.filter((issue) => issue.state === issueFilter);
      })
    );
  }

  navToIssue(url: string) {
    window.open(url, '_blank');
  }

  ngOnDestroy() {
    this.store.dispatch(clearRepoIssues());
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
