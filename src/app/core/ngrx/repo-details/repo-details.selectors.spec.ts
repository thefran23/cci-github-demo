import * as fromRepoDetails from './repo-details.reducer';
import { selectRepoDetailsState } from './repo-details.selectors';

describe('RepoDetails Selectors', () => {
  it('should select the feature state', () => {
    const result = selectRepoDetailsState({
      [fromRepoDetails.repoDetailsFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
