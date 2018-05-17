
var conn = $.hdb.getConnection({"sqlcc": "xsjs.sqlcc_config", "pool": true });


var qry = 'SELECT distinct credit_manager FROM "SCO"."SampleData2"';

var output = "";
var jsonObj = {"result":[]}; //declare object

	var rs = conn.executeQuery(qry);
	for (var i = 0; i < rs.length; i++) {

		try{
		jsonObj.result.push(rs[i].CREDIT_MANAGER);
		
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