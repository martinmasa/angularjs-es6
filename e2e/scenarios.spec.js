describe('AngularJS ES6 Demo App', () => {
  it('should display header', () => {
    browser.get('https://localhost:8080');

    element(by.tagName('h1')).getText().then((text) => {
      expect(text).toEqual('AngularJS ES6 Demo');
    });
  });
});
  