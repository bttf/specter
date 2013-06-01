var routes = require('./routes');

exports.defineRoutes= function(app){
    
app.get('/create',routes.create.newPost);
app.get('/addpost',routes.create.addPost);    
    
    
};
