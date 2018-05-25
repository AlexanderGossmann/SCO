"use strict";
$.response.contentType = "text/html";
var conn = $.hdb.getConnection({"sqlcc": "xsjs.sqlcc_config", "pool": true });

var arrSearch = [];

var cm = $.request.parameters.get("cm");

var qry = 'SELECT distinct WL_TRIGGER_CODE, read_status, date_current, wl_validity, requisite,   automation_status_current, wl_category, required_action FROM "SCO"."SampleData2"';

if (cm === ''){
	qry += "where credit_manager not in (";
	} else {
	qry += "where credit_manager in (";
}

  arrSearch = cm.split(",");

  for (var i = 0; i< arrSearch.length -1; i++){

     qry += "'"+ arrSearch[i] + "'" +",";

  }

  qry += "'"+ arrSearch[i] + "'" + ") order by WL_TRIGGER_CODE";

var output = "";
var jsonObj = {"result":[]}; //declare object

	var rs = conn.executeQuery(qry);
	for (var j = 0; j < rs.length; j++) {
		var obj = {};
		try{
		var vals = Object.values(Object(rs[j]));
		var keys = Object.keys(Object(rs[j])); 
	   	
		for (var h = 0; h <= keys.length; h++) {
			obj[keys[h]] = vals[h];
		}
			jsonObj.result.push(obj);
		} catch (e) {
			output = output + e;
		}
	}


output = JSON.stringify(jsonObj);


$.response.setBody(output);

