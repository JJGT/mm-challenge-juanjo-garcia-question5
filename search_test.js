Feature('SEARCH');

Before(({ I }) => {
  I.amOnPage('/');
  I.click('Allow and close')
});

Scenario('Empty search', ({ I }) => {
    I.click('//button[@data-testid="searchButtonCta"]');
    I.see('Our top selection');
    I.see('Our current deals');
    I.see('Need some advice');
    I.see('A little blog break');
    I.see('The biggest marketplace in Europe for DIY, Home & Garden');
    I.scrollPageToBottom();
    I.see('Our biggest brands');
    I.see('Our top categories');
});

Scenario('Non existing search', ({ I }) => {
    I.fillField('//input[@id="searchbar"]', 'nonexisting')
    I.click('//button[@data-testid="searchButtonCta"]');
    I.waitForText('Nonexisting', 20);
    I.see('no products found');
});

Scenario('Brand search', ({ I }) => {
    I.fillField('//input[@id="searchbar"]', 'ford')
    I.click('//button[@data-testid="searchButtonCta"]');
    I.seeNumberOfElements('//a//div[translate(text(),'ABCDEFGHIJKLMNOPQRSTUVWXYZ','abcdefghijklmnopqrstuvwxyz')="ford"]', 60)
});

Scenario('Product search', ({ I }) => {
    I.fillField('//input[@id="searchbar"]', 'fork')
    I.click('//button[@data-testid="searchButtonCta"]');
    I.seeNumberOfElements('//a//div[contains(text(),"Fork") or contains(text(),"FORK")]', 60)
});