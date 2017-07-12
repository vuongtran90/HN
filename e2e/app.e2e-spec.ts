import { HNPPage } from './app.po';

describe('hn-p App', () => {
  let page: HNPPage;

  beforeEach(() => {
    page = new HNPPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
