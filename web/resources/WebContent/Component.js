jQuery.sap.declare("WebContent.Component");
jQuery.sap.require("WebContent.MyRouter");


sap.ui.core.UIComponent.extend("WebContent.Component", {
	metadata : {
	manifest: "json",	
	config : {  
		  fullWidth : true
	 
	} 
	},
	
	init : function(){
		
		sap.ui.core.UIComponent.prototype.init.apply(this, arguments);
		
	},


	
	
	createContent : function() {

		// create root view
		var oview = sap.ui.view({
			id : "app",
			viewName : "WebContent.view.App",
			type : "JS",
			viewData : { component : this }
		});

/*
		// set i18n model
		var i18nModel = new sap.ui.model.resource.ResourceModel({
			bundleUrl : "i18n/messageBundle.properties"
		});
		oview.setModel(i18nModel, "i18n");

 */           
    
      
        
	// set device model
		var deviceModel = new sap.ui.model.json.JSONModel({
			isPhone : jQuery.device.is.phone,
			listMode : (jQuery.device.is.phone) ? "None" : "SingleSelectMaster",
			listItemType : (jQuery.device.is.phone) ? "Active" : "Inactive"
		});
		deviceModel.setDefaultBindingMode("OneWay");
		oview.setModel(deviceModel, "device");

		// done
		return oview;
	}
});