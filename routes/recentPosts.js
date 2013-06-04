var constants = require('../constants');

exports.getRecentPosts = function(req,res){
    
    return res.render(constants.views.home);
}