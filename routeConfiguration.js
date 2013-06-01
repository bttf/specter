var routes = require('./routes');

exports.defineRoutes= function(app){
    
app.get('/create',routes.createPost.newPost);
    
    
};
