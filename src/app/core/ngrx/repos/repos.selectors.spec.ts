import * as fromRepos from './repos.reducer';
import { selectReposState } from './repos.selectors';

describe('Repos Selectors', () => {
  it('should select the feature state', () => {
    const result = selectReposState({
      [fromRepos.reposFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
