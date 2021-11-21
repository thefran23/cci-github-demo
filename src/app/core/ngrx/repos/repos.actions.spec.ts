import * as fromRepos from './repos.actions';

describe('loadReposs', () => {
  it('should return an action', () => {
    expect(fromRepos.loadRepos().type).toBe('[Repos] Load Reposs');
  });
});
