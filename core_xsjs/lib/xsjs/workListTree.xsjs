"use strict";
$.response.contentType = "text/html";
var conn = $.hdb.getConnection({"sqlcc": "xsjs.sqlcc_config", "pool": true });

var arrSearch = [];

var cm = $.request.parameters.get("cm");

var qry = 'SELECT distinct credit_manager, WL_TRIGGER_CODE, read_status, date_current, wl_validity, requisite,   automation_status_current, wl_category, required_action FROM "SCO"."SampleData2"';

if (cm === ''){
	qry += "where credit_manager not in (";
	} else {
	qry += "where credit_manager in (";
}

  arrSearch = cm.split(",");

  for (var i = 0; i< arrSearch.length -1; i++){

     qry += "'"+ arrSearch[i] + "'" +",";

  }

  qry += "'"+ arrSearch[i] + "'" + ") order by credit_manager, WL_TRIGGER_CODE";

var output = "";
var jsonObj = {}; //declare object
var arr = [];
var arrH = [];
	var rs = conn.executeQuery(qry);
	var prev_val = "";
	var key = "";
	var val = "";
	
	for (var j = 0; j < rs.length; j++) {
		var obj = {};
		var objH = {};
		var bool = false;
		try{
		var vals = Object.values(Object(rs[j]));
		var keys = Object.keys(Object(rs[j])); 
		val = vals[0];
		key = keys[0];
	   	
		for (var h = 1; h <= keys.length; h++) {
			obj[keys[h]] = vals[h];
		}
			arr.push(obj);
		if(val !== prev_val){
			
			objH[key] = val;
			arrH.push(objH, arr);	
	   	
	   		} 
	   	
	   	
	   	prev_val = vals[0];
		
		} catch (e) {
			output = output + e;
		}
	}
	jsonObj["result"] = arrH;


output = JSON.stringify(jsonObj);


$.response.setBody(output);

