var routes = require('./routes');

exports.defineRoutes= function(app){
    
app.get('/', routes.index);
app.get('/users', user.list);
    
};
