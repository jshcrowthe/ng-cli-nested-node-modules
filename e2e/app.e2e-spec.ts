import { NestedNodeModulePage } from './app.po';

describe('nested-node-module App', () => {
  let page: NestedNodeModulePage;

  beforeEach(() => {
    page = new NestedNodeModulePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
