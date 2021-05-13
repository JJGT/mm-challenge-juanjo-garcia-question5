Feature('SEARCH');

Before(({ I }) => {
  I.amOnPage('/');
  I.click('Allow and close')
});

Scenario('Empty search', ({ I, searchPage }) => {
    I.click(searchPage.searchButton);
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
    I.click(searchPage.searchButton);
    I.waitForText('Nonexisting', 20);
    I.see('no products found');
});

Scenario('Brand search', ({ I, searchPage }) => {
    I.fillField('//input[@id="searchbar"]', 'ford')
    I.click(searchPage.searchButton);
    searchPage.lookFor('ford')
    searchPage.howManyResults('ford', 60)
});

Scenario('Product search', ({ I, searchPage }) => {
    I.fillField('//input[@id="searchbar"]', 'fork')
    I.click(searchPage.searchButton);
    searchPage.lookFor('fork')
    searchPage.howManyResults('fork', 58)
});