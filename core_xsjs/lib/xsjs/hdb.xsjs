"use strict";

var conn = $.hdb.getConnection();
var query = "SELECT  FROM ScoDataModel.REGION{REGION_NAME}";
var rs = conn.executeQuery(query);

var body = "";
while(rs.next()){
   	body += rs[0].REGION_NAME + "\n" ;
   
}

$.response.setBody(body);
$.response.contentType = "application/vnd.ms-excel; charset=utf-16le";
$.response.headers.set("Content-Disposition",
		"attachment; filename=Excel.xls");
$.response.status = $.net.http.OK;