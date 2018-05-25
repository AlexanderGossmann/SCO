sap.ui.controller("WebContent.controller.WorkList", {
	

	onInit : function (evt) {
//		sap.ui.core.UIComponent.getRouterFor(this).attachRoutePatternMatched(this.onRouteMatched, this); 
		
		var oRegionBox = this.getView().byId("oRegionBox");
		var oCMBox =  this.getView().byId("oCMBox");
		
		var sUrl = "../xsjs/region.xsjs";
			   
			jQuery.ajax({
	                url: sUrl,
	                method: 'GET',
	                dataType: 'json',
	                success: getRegions,
	                error: onErrorCall
	            });
			
	     
			function getRegions(oResponse) {
				
				var oModel = new sap.ui.model.json.JSONModel(oResponse);
				
				
				var oItemTemplate = new sap.ui.core.ListItem({
		            key: "{}",
		            text: "{}"
		        });
				
				
	            
				oRegionBox.setModel(oModel);
				oRegionBox.bindItems("/result", oItemTemplate);
				}	
		
			var sUrl = "../xsjs/creditManager.xsjs";
			   
			jQuery.ajax({
	                url: sUrl,
	                method: 'GET',
	                dataType: 'json',
	                success: creditManagers,
	                error: onErrorCall
	            });
			
	     
			function creditManagers(oResponse) {
				
				var oModel = new sap.ui.model.json.JSONModel(oResponse);
				
				
				var oItemTemplate = new sap.ui.core.ListItem({
		            key: "{}",
		            text: "{}"
		        });
				
				
	            
				oCMBox.setModel(oModel);
				oCMBox.bindItems("/result", oItemTemplate);
				}	
	 
	 
		function onErrorCall(e) {
		       }
		 
    },
    
		

    
    
     onRouteMatched: function(oEvent) {
		 
	 },
	 
	 onCMSelectionFinish: function (evt) {
		
		 
		 var oCMBox = this.getView().byId("oCMBox");
		 var arr = oCMBox.getSelectedItems();
		 var strCM	= "";
		
				 
		 for (var i = 0; i <= arr.length; i++) {
			 if (i < arr.length - 1)
				 {
				 strCM += arr[i].getKey() + ','; 
				 
				 }
			 else if (i == arr.length - 1 ) {
				 strCM += arr[i].getKey();
			 }
		 }
		 
	     var oCountryBox = this.getView().byId("oCountryBox");
		
	  
			var sUrl = "../xsjs/country.xsjs?"
						+ "cm=" + strCM;
			   
			jQuery.ajax({
	                url: sUrl,
	                method: 'GET',
	                dataType: 'json',
		            async: false,
	                success: getCountrys,
	                error: onErrorCall
	            });
			
	     
			function getCountrys(oResponse) {
				
				var oModel = new sap.ui.model.json.JSONModel(oResponse);
				
				
				var oItemTemplate = new sap.ui.core.ListItem({
		            key: "{}",
		            text: "{}"
		        });
				
				
	            
				oCountryBox.setModel(oModel);
				oCountryBox.bindItems("/result", oItemTemplate);
				}
			
		 var oODBox = this.getView().byId("oODBox");
		
	  
			var sUrl = "../xsjs/od.xsjs?"
						+ "cm=" + strCM;
			   
			jQuery.ajax({
	                url: sUrl,
	                method: 'GET',
	                dataType: 'json',
		            async: false,
	                success: getODs,
	                error: onErrorCall
	            });
			
	     
			function getODs(oResponse) {
				
				var oModel = new sap.ui.model.json.JSONModel(oResponse);
				
				
				var oItemTemplate = new sap.ui.core.ListItem({
		            key: "{}",
		            text: "{}"
		        });
				
				
	            
				oODBox.setModel(oModel);
				oODBox.bindItems("/result", oItemTemplate);
				}
			
		
			
			
				
		 var oAutoBox = this.getView().byId("oAutoBox");
		
	  
			var sUrl = "../xsjs/automated.xsjs?"
						+ "cm=" + strCM;
			   
			jQuery.ajax({
	                url: sUrl,
	                method: 'GET',
	                dataType: 'json',
		            async: false,
	                success: getAutos,
	                error: onErrorCall
	            });
			
	     
			function getAutos(oResponse) {
				
				var oModel = new sap.ui.model.json.JSONModel(oResponse);
				
				
				var oItemTemplate = new sap.ui.core.ListItem({
		            key: "{}",
		            text: "{}"
		        });
				
				
	            
				oAutoBox.setModel(oModel);
				oAutoBox.bindItems("/result", oItemTemplate);
				}
			
		
			
			function onErrorCall(e) {
				}
	},
	
	onSelectTable: function (evt) {
	
		var oCMBox = this.getView().byId("oCMBox");
		 var arr = oCMBox.getSelectedItems();
		 var strCM	= "";
		
				 
		 for (var i = 0; i <= arr.length; i++) {
			 if (i < arr.length - 1)
				 {
				 strCM += arr[i].getKey() + ','; 
				 
				 }
			 else if (i == arr.length - 1 ) {
				 strCM += arr[i].getKey();
			 }
		 }
		 
	     var oWLTable = this.getView().byId("oWLTable");
		
	  
			var sUrl = "../xsjs/workList.xsjs?"
						+ "cm=" + strCM;
			   
			jQuery.ajax({
	                url: sUrl,
	                method: 'GET',
	                dataType: 'json',
		            async: false,
	                success: getItems,
	                error: onErrorCall
	            });
			
	     
			function getItems(oResponse) {
				
				var oModel = new sap.ui.model.json.JSONModel(oResponse);
				
				
				
				
				
	            
				oWLTable.setModel(oModel);
				oWLTable.setVisible(true);
				
				
			}
			
				function onErrorCall(e) {
		       }
	
		
	}
	
	
	

	
});