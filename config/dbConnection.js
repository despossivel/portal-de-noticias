var mysql = require('mysql');
var connMySql = () => {
	return mysql.createConnection({
	 		host:'localhost',
	 		user:'root',
	 		password:'root',
	 		database:'porta_noticias'
	 	});
}

module.exports = () => {
	return connMySql;
}


/*
	module.exports = mysql.createConnection({
	 		host:'localhost',
	 		user:'root',
	 		password:'root',
	 		database:'porta_noticias'
	 	});
*/

