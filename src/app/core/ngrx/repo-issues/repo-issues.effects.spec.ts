import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { RepoIssuesEffects } from './repo-issues.effects';

describe('RepoIssuesEffects', () => {
  let actions$: Observable<any>;
  let effects: RepoIssuesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        RepoIssuesEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(RepoIssuesEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
