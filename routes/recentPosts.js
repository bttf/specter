var constants = require('../constants');
var request = require('request');
var helpers = require('../helpers');

exports.getRecentPosts = function(req,res){
    
    var url = constants.queries.recentPosts();
    var pageNo = req.params.page;
    var headers = helpers.setHeaders(url,getRecentPostsQueryData());
    
    request(headers,function(error,response,body){
        
        var resultCount = constants.queries.paginationSize - 1;
        return res.render(constants.views.home,body.hits.slice(0,resultCount));
    });
    
    
};

function getRecentPostsQueryData(pageNo,paginationSize){
    
    var queryData = {
      "sort" :{ "postedOn" : {"order" : "desc"}} 
    };
    
     
    queryData.from = getPaginationParameters(pageNo,paginationSize);
    queryData.size = paginationSize;
    
    return queryData;
}

function getPaginationParameters(pageNo,paginationSize){
    
    return pageNo ? pageNo*paginationSize -1 : 0; 
}

function hasPrevbutton(pageNo){
    return pageNo? true:false;
}

function hasNextButton(total){
    
    return total===11?true:false;
}

function buildResponse(){
}