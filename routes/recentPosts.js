var constants = require('../constants');
var request = require('request');
var helpers = require('../helpers');

exports.getRecentPosts = function(req,res){
    
    var url = constants.queries.recentPosts();
    var pageNo = req.params.page;
    var headers = helpers.setHeaders(url,getRecentPostsQueryData());
    
    request(headers,function(error,response,body){
        
        var resultCount = constants.queries.paginationSize - 1;
        var results = body.hits;
        var dataToRender = buildData(results.hits.slice(0,resultCount),pageNo,results.total);
        return res.render(constants.views.home,dataToRender);
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

function buildResponse(data,pageNo,total){
    var items = {};
    items.hits = data;
    items.hasPrevious = hasPrevbutton(pageNo);
    items.hasNext = hasNextButton(tota);
    return items;
}