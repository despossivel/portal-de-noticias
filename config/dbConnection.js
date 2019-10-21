const mysql = require('mysql');
const connMySql = () => mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'porta_noticias'
});

module.exports = () => {
	return connMySql;
}