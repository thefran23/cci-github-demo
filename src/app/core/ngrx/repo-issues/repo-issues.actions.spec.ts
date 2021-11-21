import * as fromRepoIssues from './repo-issues.actions';

describe('loadRepoIssuess', () => {
  it('should return an action', () => {
    expect(fromRepoIssues.loadRepoIssuess().type).toBe('[RepoIssues] Load RepoIssuess');
  });
});
