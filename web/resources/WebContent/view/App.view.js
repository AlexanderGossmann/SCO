sap.ui.jsview("WebContent.view.App", {

	getControllerName: function () {
		return "WebContent.controller.App";
	},
	
	createContent: function (oController) {
		
		// to avoid scroll bars on desktop the root view must be set to block display
		this.setDisplayBlock(true);
		
		// create app
		this.app = new sap.m.App("idAppControl");
		
		// load the list page
		var list = sap.ui.xmlview("WorkList", "WebContent.view.WorkList");
		list.getController().nav = this.getController();
		this.app.addPage(list, true);
		
		return this.app;
	}
});