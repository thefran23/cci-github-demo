import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ReposEffects } from './repos.effects';

describe('ReposEffects', () => {
  let actions$: Observable<any>;
  let effects: ReposEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ReposEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(ReposEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
