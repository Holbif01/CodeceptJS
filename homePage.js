const { I } = inject();



class HomePage {

    inputs = {
        search: '#edtSearch'
    }

    buttons = {
        search: '#btnSearch'
    }


}



module.exports = new HomePage();
module.exports.HomePage = HomePage;