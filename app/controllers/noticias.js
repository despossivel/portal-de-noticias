module.exports.noticias = (application, req, res)=>{
    var connection = application.config.dbConnection();
    var noticiasModel = new application.app.models.noticiasModel(connection);

    noticiasModel.getNoticias(connection,(erro,result)=>{
         res.render("noticias/noticias",{noticias:result});
     });

}

module.exports.noticia = (application, req, res)=>{

    var connection = application.config.dbConnection();
    var noticiasModel = new application.app.models.noticiasModel(connection);

    noticiasModel.getNoticia(connection,(erro,result)=>{
        res.render("noticias/noticia",{noticia:result});
     });


}
