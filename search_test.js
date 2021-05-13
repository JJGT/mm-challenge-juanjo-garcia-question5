Feature('SEARCH');

Before(({ I }) => {
  I.amOnPage('/');
  I.click('Allow and close')
});

Scenario('Empty search', ({ I, searchPage }) => {
    searchPage.searchButton;
    I.see('Our top selection');
    I.see('Our current deals');
    I.see('Need some advice');
    I.see('A little blog break');
    I.see('The biggest marketplace in Europe for DIY, Home & Garden');
    I.scrollPageToBottom();
    I.see('Our biggest brands');
    I.see('Our top categories');
});

Scenario('Non existing search', ({ I, searchPage }) => {
    I.fillField('//input[@id="searchbar"]', 'nonexisting')
    searchPage.searchButton;
    I.waitForText('Nonexisting', 20);
    I.see('no products found');
});

Scenario('Brand search', ({ I, searchPage }) => {
    I.fillField('//input[@id="searchbar"]', 'ford')
    searchPage.searchButton;
    I.seeElement('//a//div[contains(translate(text(), "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz"), "ford")]');
    I.seeNumberOfElements('//a//div[contains(translate(text(), "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz"), "ford")]', 60)
});

Scenario('Product search', ({ I, searchPage }) => {
    I.fillField('//input[@id="searchbar"]', 'fork')
    searchPage.searchButton;
    I.seeElement('//a//div[contains(translate(text(), "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz"), "fork")]')
    I.seeNumberOfElements('//a//div[contains(translate(text(), "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz"), "fork")]', 58)
});

Scenario('Product & Brand search', ({ I, searchPage }) => {
    I.fillField('//input[@id="searchbar"]', 'trowel marshalltown')
    searchPage.searchButton;
    //At least one element has Product or Brand into description
    I.seeElement('//a//div[contains(translate(text(), "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz"), "trowel") or contains(translate(text(), "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz"), "marshalltown")]')
    I.seeNumberOfElements('//a//div[contains(translate(text(), "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz"), "trowel") or contains(translate(text(), "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz"), "marshalltown")]', 60)
});