var routes = require('./routes');

exports.defineRoutes= function(app){
    
app.get('/create',routes.create.newPost);
app.get('/',routes.recentPosts.getRecentPosts);    
    
app.post('/addpost',routes.create.addPost);    
    
    
};
