var constants = require('../constants');
var request = require('request');
var helpers = require('../helpers');

exports.getRecentPosts = function(req,res){
    
    var url = constants.queries.recentPosts();
    var pageNo = req.params.page;
    var headers = helpers.setHeaders(url,getRecentPostsQueryData());
    
    request(headers,function(error,response,body){
        
        return res.render(constants.views.home,body.hits);
    });
    
    
};

function getRecentPostsQueryData(){
    
    var queryData = {
      "sort" :{ "postedOn" : {"order" : "desc"}} 
    };
    return queryData;
}

function getPaginationParameters(pageNo,paginationSize){
    
    //This one is for the first page
    if(!pageNo) return {from:0,size:paginationSize}; 
    
    var from = pageNo*paginationSize;
    return {from:from,size:paginationSize}; 
}

function hasPrevbutton(){
}

function hasNextButton(){
}
