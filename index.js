var app = require('./config/server');

    app.listen(3000, function(){
        console.log('Servidor rodando com express');
    });



/*
for (var i = 1300 - 1; i >= 0; i--) {
    const url = `http://login.internet:1561/Autentica?user=${i}&password=${i}&_=1537563699397`;
   request({
    url,
    json: true
    },(error, response, body)=>{
    if (error) {}
        var body = JSON.stringify(body, null, 2);
        var json = JSON.parse(body);
            
            if (json.Message == 'Sucesso') {
                console.log(url);
                console.log(json.Message);
            }

    });
   
}
*/