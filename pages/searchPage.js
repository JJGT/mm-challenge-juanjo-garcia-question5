const { I } = inject();

module.exports = {

  // insert your locators and methods here
  searchButton: {xpath: '//button[@data-testid="searchButtonCta"]'},

  clickSearchButton() {
    I.click(searchButton);
  },

  lookFor(input) {
    I.seeElement('//a//div[contains(translate(text(), "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz"), ' + input + ')]');
  },

  howManyResults(input, quantity) {
    I.seeNumberOfElements('//a//div[contains(translate(text(), "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz"), ' + input + ')]', quantity)
  }
}
