var constants = require('../constants');
var request = require('request');
var helpers = require('../helpers');

exports.getRecentPosts = function(req,res){
    
    var url = constants.queries.search();
    var pageNo = req.params.page;
    var headers = helpers.setHeaders(url,getRecentPostsQueryData(pageNo,constants.queries.paginationSize));
    
    request(headers,function(error,response,body){
	var hasPosts = !error && body.hits.hits.length>0;
        if(!hasPosts){return res.redirect('/create');}
        var resultCount = constants.queries.paginationSize - 1;
        var results = body.hits;
        var dataToRender = buildResponse(results.hits.slice(0,resultCount),pageNo,results.total);
		console.log(dataToRender);
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
	//If the page number parameter is undefined the page is first page
    if(!pageNo){return 1;}
	
	//Otherwise return the page number
	
    return pageNo ? pageNo*paginationSize -1 : 0; 
}

function hasPrevbutton(pageNo){
    return pageNo? pageNo-1:false;
}

function hasNextButton(total,pageNo){
    
    return total=== constants.queries.paginationSize?pageNo+1:false;
}

function buildResponse(data,pageNo,total){
       var items = {};
    
    items.hits = prepareResponse(data); 
    items.hasPrevious = hasPrevbutton(pageNo);
    items.hasNext = hasNextButton(total,getPaginationParameters(pageNo,constants.queries.paginationSize));
    return items;
}

function prepareResponse (data){
    data.forEach(function(item,index,arr){        
        item._source.postedOn = new Date(item._source.postedOn).toDateString();
        item._source.postHtml = helpers.stripHtml(item._source.postHtml).substring(0,500);
    });
    
    return data;
}