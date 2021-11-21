import * as fromRepoDetails from './repo-details.actions';

describe('loadRepoDetailss', () => {
  it('should return an action', () => {
    expect(fromRepoDetails.loadRepoDetails().type).toBe(
      '[RepoDetails] Load RepoDetailss'
    );
  });
});
