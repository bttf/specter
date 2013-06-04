var constants = require('../constants');
var request = require('request');

exports.getRecentPosts = function(req,res){
    
    return res.render(constants.views.home);
}

function getRecentPostsQueryData(){
    
    var queryData = {
      "sort" :{ "postedOn" : {"order" : "desc"}} 
    }
    return queryData;
}