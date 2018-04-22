"use strict";

var conn = $.hdb.getConnection();
var query = "SELECT * FROM ScoDataModel.REGION";
var rs = conn.executeQuery(query);

var body = "";
for(var item of rs){
   if(item.Amount >= 500){
	body += item.PurchaseOrderItemId + "\t" +
			item.ProductID + "\t" + item.Amount + "\n";
   }
}

$.response.setBody(body);
$.response.contentType = "application/vnd.ms-excel; charset=utf-16le";
$.response.headers.set("Content-Disposition",
		"attachment; filename=Excel.xls");
$.response.status = $.net.http.OK;