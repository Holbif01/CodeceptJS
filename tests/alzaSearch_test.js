

Feature('Alza Search');

Scenario('hledani Harryho', ({ I, HomePage }) => {
  const harryPotter = 'Harry Potter'  
  const assertion = 'Vyhledáno: Harry Potter'
    
    I.amOnPage('https://www.alza.cz/');
    I.click(HomePage.inputs.search) 
    I.fillField(HomePage.inputs.search, harryPotter)
    I.click(HomePage.buttons.search)
    I.see(assertion)

});


Scenario.only('hledani svateho gralu', ({ I }) => {
    I.amOnPage('https://www.alza.cz/');
    I.click('#edtSearch') 
    I.fillField( '#edtSearch', 'indiana jones')
    I.click('#btnSearch')
    I.see('Vyhledáno: indiana jones')

});



Scenario.only('kontrola objednavky', ({ I, MyOrdersPage }) => {
  I.amOnPage('https://www.alza.cz/muj-ucet/objednavky.htm');
  I.seeElement(MyOrdersPage.inputs.search) 
  I.seeElement(MyOrdersPage.buttons.checkState)
  

});



Feature('nextChapter');


Scenario('Hledani Pottera s metodou', ({ HomePage }) => {
   HomePage.searchHarryPotter()
   
  })


  
  Scenario('Hledani Pottera s metodou2', ({ HomePage }) => {
    HomePage.search('Harry Potter', 'Vyhledáno: Harry Potter')
    
   }).tag('@HP')






   
   
 

   




   

