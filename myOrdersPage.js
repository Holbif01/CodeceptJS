const { I } = inject();



class MyOrdersPage {

    inputs = {
        search: '.textbox.placeholder'

    }

    buttons = {
        checkState: '.searchButton.btnx.normal.blue.new'
    }


}

module.exports = new MyOrdersPage();
module.exports.MyOrdersPage = MyOrdersPage;
