import { TestBed } from '@angular/core/testing';

import { RepoDetailsResolver } from './repo-details.resolver';

describe('RepoDetailsResolver', () => {
  let resolver: RepoDetailsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(RepoDetailsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
