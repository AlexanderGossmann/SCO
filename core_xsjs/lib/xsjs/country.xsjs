$.response.contentType = "text/html";
var conn = $.hdb.getConnection({"sqlcc": "xsjs.sqlcc_config", "pool": true });

var arrSearch = [];

var cm = $.request.parameters.get("cm");

var qry = 'SELECT distinct country FROM "SCO"."SampleData2"';

if (cm === ''){
	qry += "where credit_manager not in (";
	} else {
	qry += "where credit_manager in (";
}

  arrSearch = cm.split(",");

  for (var i = 0; i< arrSearch.length -1; i++){

     qry += "'"+ arrSearch[i] + "'" +",";

  }

  qry += "'"+ arrSearch[i] + "'" + ") order by country";

var output = "";
var jsonObj = {"result":[]}; //declare object

	var rs = conn.executeQuery(qry);
	for (var j = 0; j < rs.length; j++) {

		try{
		jsonObj.result.push(rs[j].COUNTRY);
		
		} catch (e) {
			output = output + e;
		}
	}


output = JSON.stringify(jsonObj);


$.response.setBody(output);

/*-----------------
var conn = $.hdb.getConnection();

var XSDS = $.require("cds").xsjs(conn);

var reg = XSDS.$importView("sco", "SCO_VIEW");

var items = reg.$findAll({ });

var query = "SELECT distinct region FROM sco.SampleData2";
var rs = conn.executeQuery(query);

var body = "";
while(rs.next()){
   	body += rs[0].REGION + "\n" ;
   
}

$.response.setBody(body);
$.response.contentType = "application/vnd.ms-excel; charset=utf-16le";
$.response.headers.set("Content-Disposition",
		"attachment; filename=Excel.xls");
$.response.status = $.net.http.OK;
*/