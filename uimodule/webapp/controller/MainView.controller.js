sap.ui.define(["com/block/dev/priceTracker/controller/BaseController",
    "sap/ui/model/json/JSONModel",
    "../model/formatter"
    ], 
    function (Controller, JSONModel,formatter) {
    "use strict";   

    return Controller.extend("com.block.dev.priceTracker.controller.MainView", {

        formatter: formatter,

        onInit: function(){
            console.log('hello');
            var that = this;
            var oModel = new JSONModel();

            var coingeckoURL="https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&sparkline=false&price_change_percentage=%271h%2C24h%2C7d%27";



            oModel.loadData(coingeckoURL);

            oModel.dataLoaded().then(function(oEvent){
                console.log("data loaded");
                oModel.getData();
                that.getView().setModel(oModel);
            })
        },

        upperCase: function(sValue){
            return sValue.toUpperCase();
        }


    });
});
