var helpers = require('../helpers');
var request = require('request');
var constants = require('../constants');
var preferences = require('../preferences').preferences;

exports.searchByTitle = function(req,res){
    
    var searchQuery = req.body.query;
    var url = constants.queries.search();
    var searchData = buildSearchQuery(searchQuery,false);
   var headers = helpers.setHeaders(url,searchData);
    request(headers,function(error,response,body){
        
        return res.send(body.hits.hits);
    });  
    
};

function buildSearchQuery(searchTerm,isDeepSearch){
    
var query = {  
    "fields" : ["title","wordCount"],
    "size":checkIfDeepSearch(isDeepSearch),
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


    
 function checkIfDeepSearch(isDeepSearch){
	 
	return isDeepSearch ?  preferences.paginationSize : preferences.searchResults;
 }