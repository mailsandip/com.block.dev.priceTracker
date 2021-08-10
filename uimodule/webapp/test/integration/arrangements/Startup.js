sap.ui.define(["sap/ui/test/Opa5"], function (Opa5) {
    "use strict";

    return Opa5.extend("com.block.dev.priceTracker.test.integration.arrangements.Startup", {
        iStartMyApp: function () {
            this.iStartMyUIComponent({
                componentConfig: {
                    name: "com.block.dev.priceTracker",
                    async: true,
                    manifest: true
                }
            });
        }
    });
});
