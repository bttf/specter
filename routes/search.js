var helpers = require('../helpers');
var request = require('request');
var constants = require('../constants');
var preferences = require('../preferences').preferences;

exports.searchByTitle = function(req,res){
    
    var searchQuery = req.body.query;
    var url = constants.queries.search();
    var searchData = buildSearchQuery(searchQuery);
   var headers = helpers.setHeaders(url,searchData);
    request(headers,function(error,response,body){
        
        return res.send(body.hits.hits);
    });  
    
};



exports.deepSearch = function(req,res){
    
    var url = constants.queries.search();
	var pageNo = req.query.page;
	var query = pageNo? req.query.q : req.body.query;
	var paginationSize = preferences.searchIndex.paginationSize;	
    var headers = helpers.setHeaders(url,getSearchPostsQueryData(pageNo,paginationSize,query));
    
    request(headers,function(error,response,body){
		
		
        var resultCount = paginationSize - 1;
        var results = body.hits;
		var common = {
			
			data : results.hits.slice(0,resultCount),
			pageNo : pageNo,
			total: body.hits.hits.length,
			preferences : preferences
		};		
		
        var dataToRender = helpers.buildResponse(common);
		dataToRender.query = query;
		
		return res.render(constants.views.searchResults,dataToRender);
    });
    
    
};

function getSearchPostsQueryData(pageNo,paginationSize,searchQuery){  
	
	var queryData = buildSearchQuery(searchQuery);
	queryData.fields = preferences.searchIndex.pageFields;
    return helpers.pagination.buildPaginationQuery(pageNo,paginationSize,queryData);
}

function buildSearchQuery(searchTerm){
    
var query = {  
    "fields" : ["title","wordCount"],
    "size":constants.queries.searchSize,
    "query":{
        "bool":{
            
                "should":[
            {
                "match":{
                    "title":{
                        "query": searchTerm,
                        "operator": "and"    
                    }
                }
            },
                    {
                        "match_phrase" :{
                            
                            "postHtml":{
                            
                            "query" : searchTerm
                                
                         }
                    
                        }        
                    }
                ]
            }
        }
    };
    
    return query;
}  
 