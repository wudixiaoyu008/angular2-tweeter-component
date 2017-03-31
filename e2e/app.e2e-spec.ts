import { Angular2TweeterComponentPage } from './app.po';

describe('angular2-tweeter-component App', function() {
  let page: Angular2TweeterComponentPage;

  beforeEach(() => {
    page = new Angular2TweeterComponentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
