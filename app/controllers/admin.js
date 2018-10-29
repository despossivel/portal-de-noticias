module.exports.formulario_inclusao_noticia = (application, req, res)=>{

    res.render("admin/form_add_noticia",{validacao:{}, noticia:{}});

}

module.exports.noticiaSalvar = (application, req, res)=>{


    var noticia = req.body;

    req.assert('titulo','Título é obrigatorio').notEmpty();
    req.assert('resumo','Resumo deve ter entre 10 e 100 caractetes').len(10,100);
    req.assert('autor','Autor é obrigatorio').notEmpty();
    req.assert('data_noticia','Data é obrigatorio').notEmpty(); //.isDate({format:'YYY-MM-DD'})
    req.assert('noticia','Noticia é obrigatorio').notEmpty();
    
    var errors = req.validationErrors();

    if (errors) {
        res.render("admin/form_add_noticia", {validacao :errors, noticia});
        return;

    }

    var connection = application.config.dbConnection();
    var noticiasModel = new application.app.models.noticiasModel(connection);

    noticiasModel.salvarNoticia(noticia,connection,(erro,result)=>{
             res.redirect('/noticias');
     });


}