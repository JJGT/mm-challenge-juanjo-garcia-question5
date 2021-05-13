const { I } = inject();

module.exports = {

  // insert your locators and methods here
  searchButton: {xpath: '//button[@data-testid="searchButtonCta"]'},
  nextPage: {xpath: '//a[contains(@data-testid, "pagination-button-next")]'},

  lookFor(input) {
    I.seeElement('//a//div[contains(translate(text(), "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz"), "' + input + '")]');
  },

  howManyResults(input, quantity) {
    I.seeNumberOfElements('//a//div[contains(translate(text(), "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz"), "' + input + '")]', quantity)
  },

  goToPage(number) {
    I.click('//a[contains(@data-testid, "pagination-button-page-' + number +'")]')
  }

}
