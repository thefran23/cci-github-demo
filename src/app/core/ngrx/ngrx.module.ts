import { RepoIssuesEffects } from './repo-issues/repo-issues.effects';
import { RepoDetailsEffects } from './repo-details/repo-details.effects';
//#region Core
import { Store, StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../../environments/environment';
import { reducers, State } from './index';
import { EffectsModule } from '@ngrx/effects';
//#endregion

//#region Effects
import { ReposEffects } from './repos/repos.effects';

//#endregion

//#region Actions
import { loadRepos } from './repos/repos.actions';
//#endregion

@NgModule({
  imports: [
    StoreModule.forRoot(reducers, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      },
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([
      ReposEffects,
      RepoDetailsEffects,
      RepoIssuesEffects,
    ]),
  ],
  providers: [],
  exports: [StoreModule, StoreDevtoolsModule, EffectsModule],
})
export class NgrxModule {}
