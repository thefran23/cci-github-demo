import { BehaviorSubject, Subject } from 'rxjs';
import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { routeParamToFullName } from './core/consts/helpers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit, OnDestroy {
  defaultHeader = 'CCI Github Demo by Francois Rossouw';
  header$ = new BehaviorSubject<string>(this.defaultHeader);
  destroyed$: Subject<void> = new Subject<void>();
  constructor(private router: Router) {}

  ngAfterViewInit() {
    this.router.events.subscribe(
      (event) => event instanceof NavigationEnd && this.handleRouteChange(event)
    );
  }

  handleRouteChange = (event: any) => {
    if (event.url !== '/repos' && event.url !== '/') {
      const fullName = routeParamToFullName(event.url);
      this.header$.next(fullName.replace('/repos/', ''));
    } else {
      this.header$.next(this.defaultHeader);
    }
  };

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
