module.exports = (application) => {
    application.get('/',(req,res)=>{

        application.app.controllers.index.index(application,req,res);
       // app.app.controllers.index(app);
      //  res.render("home/index");
    
    });


}