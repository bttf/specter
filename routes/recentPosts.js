var constants = require('../constants');
var request = require('request');
var helpers = require('../helpers');

exports.getRecentPosts = function(req,res){
    
    var url = constants.queries.search();
    var pageNo = parseInt(req.params.page);
    var headers = helpers.setHeaders(url,getRecentPostsQueryData(pageNo,constants.queries.paginationSize));
    
    request(headers,function(error,response,body){
			var hasPosts = !error && body.hits.hits.length>0;
		
        if(!hasPosts){return res.redirect('/create');}
        var resultCount = constants.queries.paginationSize - 1;
        var results = body.hits;
        var dataToRender = buildResponse(results.hits.slice(0,resultCount),pageNo,body.hits.hits.length);
		return res.render(constants.views.home,dataToRender);
    });
    
    
};

function getRecentPostsQueryData(pageNo,paginationSize){
    
    var queryData = {
      "sort" :{ "postedOn" : {"order" : "desc"}} 
    };
    
     
    queryData.from = helpers.pagination.getPaginationParameters(pageNo,paginationSize);
    queryData.size = paginationSize;
    
    return queryData;
}

function buildResponse(data,pageNo,total){
       var items = {};
    
    items.hits = prepareResponse(data); 
    items.hasPrevious = helpers.pagination.hasPrevButton(pageNo);
    items.hasNext = helpers.pagination.hasNextButton(pageNo,total,constants.queries.paginationSize);
	items.isFirstPage = helpers.pagination.isFirstPage(items.hasPrevious);
    return items;
}

function prepareResponse (data){
    data.forEach(function(item,index,arr){        
        item._source.postedOn = new Date(item._source.postedOn).toDateString();
        item._source.postHtml = helpers.stripHtml(item._source.postHtml).substring(0,500);
    });
    
    return data;
}