function NoticiasModel(connection){
	this._connection = connection;
}

NoticiasModel.prototype.getNoticias = (connection,callback) => {
 	connection.query(`SELECT * FROM noticias ORDER BY data_criacao DESC`, callback);
};

NoticiasModel.prototype.getNoticia = (connection,callback) => {
	connection.query(`SELECT * FROM noticias WHERE id_noticia = 1`, callback);
};

NoticiasModel.prototype.salvarNoticia = (noticia,connection,callback) => {
	connection.query("INSERT INTO noticias SET ?", noticia, callback);
};

NoticiasModel.prototype.get5UltimasNoticias = (connection,callback)=>{
	connection.query(`SELECT * FROM noticias ORDER BY data_criacao DESC LIMIT 5`,callback);
};

module.exports = () => {
	return NoticiasModel;
}