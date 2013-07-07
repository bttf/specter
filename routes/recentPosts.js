var constants = require('../constants');
var request = require('request');
var helpers = require('../helpers');
var preferences = require('../preferences').preferences;


exports.getRecentPosts = function(req,res){
    
    var url = constants.queries.search();
	var pageNo = parseInt(req.params.page);
    var headers = helpers.setHeaders(url,getRecentPostsQueryData(pageNo,preferences.index.paginationSize));
    
    request(headers,function(error,response,body){

		var hasPosts = error|| !body || body.error || body.hits.hits.length===0?false:true;
		if(!hasPosts){return res.redirect('/create');}
        var resultCount = preferences.index.paginationSize - 1;
        var results = body.hits;
		
		var common = {
			
			data : results.hits.slice(0,resultCount),
			pageNo : pageNo,
			total: body.hits.hits.length,
			preferences : preferences
		}
		
        var dataToRender = helpers.buildResponse(common);
		return res.render(constants.views.home,dataToRender);
    });
    
    
};

function getRecentPostsQueryData(pageNo,paginationSize){    
	
    var queryData = {
      "sort" :{ "postedOn" : {"order" : "desc"}},
	   "fields" : preferences.index.pageFields	
    };
	
    return helpers.pagination.buildPaginationQuery(pageNo,paginationSize,queryData);
}




