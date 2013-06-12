var routes = require('./routes');

exports.defineRoutes= function(app){
    
app.get('/create',routes.create.newPost);
app.get('/:id',routes.postDetail.postDetail);
app.get('/:id/edit',routes.edit.editPost);    
app.get('/page/:page',routes.recentPosts.getRecentPosts);    
app.get('/',routes.recentPosts.getRecentPosts);
app.post('/searchByTitle',routes.search.searchByTitle);    
app.post('/addpost',routes.create.addPost);
app.post('/updatePost',routes.update.updatePost);    
app.post('/deletePost',routes.delete.deletePost);    
};
