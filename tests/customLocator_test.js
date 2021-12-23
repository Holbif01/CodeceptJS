Scenario('customLocatorsCheck'), ({I}) => {
    
    I.amOnPage('https://www.seznam.cz/');
    I.click('$search-form')
    I.fillField('google')
    I.click('$search-button')
    I.see('google')

}