//var connection = require('../../config/dbConnection');

module.exports = (application) => {

    application.get('/noticias', function(req,res){
		application.app.controllers.noticias.noticias(application, req, res);
    });


}