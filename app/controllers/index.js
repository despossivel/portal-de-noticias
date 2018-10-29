module.exports.index = (application, req, res)=>{
    var connection = application.config.dbConnection();
	var noticiasModel = new application.app.models.noticiasModel(connection);

        noticiasModel.get5UltimasNoticias(connection,(err,result)=>{
            res.render("home/index",{noticias:result});
        });
        
}