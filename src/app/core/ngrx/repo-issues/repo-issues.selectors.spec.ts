import * as fromRepoIssues from './repo-issues.reducer';
import { selectRepoIssuesState } from './repo-issues.selectors';

describe('RepoIssues Selectors', () => {
  it('should select the feature state', () => {
    const result = selectRepoIssuesState({
      [fromRepoIssues.repoIssuesFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
