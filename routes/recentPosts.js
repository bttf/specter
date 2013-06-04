var constants = require('../constants');
var request = require('request');
var helpers = require('../helpers');

exports.getRecentPosts = function(req,res){
    
    var url = constants.queries.recentPosts();
    
    var headers = helpers.setHeaders(url,getRecentPostsQueryData());
    
    return res.render(constants.views.home);
}

function getRecentPostsQueryData(){
    
    var queryData = {
      "sort" :{ "postedOn" : {"order" : "desc"}} 
    }
    return queryData;
}