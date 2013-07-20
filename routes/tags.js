var helpers = require('../helpers');
var request = require('request');
var preferences = require('../preferences').preferences;
var constants = require('../constants');

exports.getTaggedPosts = function(req,res){
	
	var url = constants.queries.search();
	var pageNo = parseInt(req.params.page);
	var paginationSize  = preferences.tagIndex.paginationSize;
	var tag = req.params.tag;
    var headers = helpers.setHeaders(url,buildTagQuery(tag,pageNo,paginationSize));
    
	request(headers,function(error,response,body){		
				
		var total = body.hits.hits.length;
        var resultCount = paginationSize - 1;
        var results = body.hits;
		
		var common = {
			
			data : results.hits.slice(0,resultCount),
			pageNo : pageNo,
			total: total,
			preferences : preferences,
			index: preferences.tagIndex
		}
		
        var dataToRender = helpers.buildResponse(common);
		dataToRender.tag = tag
		return res.render(constants.views.tagResults,dataToRender);
    });
    
}

function buildTagQuery(tag,pageNo,paginationSize){
	
	var queryData = {
		"fields" : preferences.tagIndex.pageFields,
		"size" : preferences.tagIndex.paginationSize,
		"query" : {
			"term" :{
				"tags" : tag
			}
		}
	}
	
	return helpers.pagination.buildPaginationQuery(pageNo,paginationSize,queryData);
	
}