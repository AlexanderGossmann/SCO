$.response.contentType = "text/html";
var conn = $.hdb.getConnection({"sqlcc": "xsjs.sqlcc_config", "pool": true });

var arrSearch = [];

var cm = $.request.parameters.get("cm");

var qry = 'SELECT distinct top_od FROM "SCO"."SampleData2"';

if (cm === ''){
	qry += "where credit_manager not in (";
	} else {
	qry += "where credit_manager in (";
}

  arrSearch = cm.split(",");

  for (var i = 0; i< arrSearch.length -1; i++){

     qry += "'"+ arrSearch[i] + "'" +",";

  }

  qry += "'"+ arrSearch[i] + "'" + ") order by top_od";

var output = "";
var jsonObj = {"result":[]}; //declare object

	var rs = conn.executeQuery(qry);
	for (var j = 0; j < rs.length; j++) {

		try{
		jsonObj.result.push(rs[j].TOP_OD);
		
		} catch (e) {
			output = output + e;
		}
	}


output = JSON.stringify(jsonObj);


$.response.setBody(output);
