module.exports.index = (application, req, res) => {
    const connection = application.config.dbConnection();
    const noticiasModel = new application.app.models.noticiasModel(connection);

    noticiasModel.get5UltimasNoticias(connection, (err, result) => res.render("home/index", { noticias: result }));

}