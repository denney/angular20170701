import { Angular20170701Page } from './app.po';

describe('angular20170701 App', () => {
  let page: Angular20170701Page;

  beforeEach(() => {
    page = new Angular20170701Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
