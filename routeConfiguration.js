var routes = require('./routes');

exports.defineRoutes= function(app){
    
app.get('/create',routes.create.newPost);
app.get('/search',routes.search.deepSearch);
app.get('/blog/archives',routes.archives.getArchives);
app.get('/feed/:type',routes.feeds.getFeeds);	
app.get('/page/:page',routes.recentPosts.getRecentPosts);
app.get('/tag/:tag',routes.tags.getTaggedPosts);
app.get('/tag/:tag/:page',routes.tags.getTaggedPosts);	
app.get('/:id',routes.postDetail.postDetail);
app.get('/:id/edit',routes.edit.editPost);
app.get('/:id/delete',routes.delete.getPostToDelete);
app.get('/',routes.recentPosts.getRecentPosts);
app.post('/searchByTitle',routes.search.searchByTitle);    
app.post('/addpost',routes.create.addPost);
app.post('/updatePost',routes.update.updatePost);    
app.post('/deletePost',routes.delete.deletePost);
app.post('/search',routes.search.deepSearch);	
};
