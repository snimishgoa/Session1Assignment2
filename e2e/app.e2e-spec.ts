import { Session1Assignment2Page } from './app.po';

describe('session1-assignment2 App', () => {
  let page: Session1Assignment2Page;

  beforeEach(() => {
    page = new Session1Assignment2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
