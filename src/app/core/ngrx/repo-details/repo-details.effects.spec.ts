import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { RepoDetailsEffects } from './repo-details.effects';

describe('RepoDetailsEffects', () => {
  let actions$: Observable<any>;
  let effects: RepoDetailsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        RepoDetailsEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(RepoDetailsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
