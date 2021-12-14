const { I } = inject();



class HomePage {



    inputs = {
        search: '#edtSearch'
    }

    buttons = {
        search: '#btnSearch'
    }

    searchHarryPotter(){

        const harryPotter = 'Harry Potter'  
        const assertion = 'Vyhledáno: Harry Potter'
          
          I.amOnPage('https://www.alza.cz/');
          I.click(this.inputs.search) 
          I.fillField(this.inputs.search, harryPotter)
          I.click(this.buttons.search)
          I.see(assertion)
    }


    
    
    search(searchString, assertion){

    
          I.amOnPage('https://www.alza.cz/');
          I.click(this.inputs.search) 
          I.fillField(this.inputs.search, searchString)
          I.click(this.buttons.search)
          I.see(assertion)
    }

}



module.exports = new HomePage();
module.exports.HomePage = HomePage;



