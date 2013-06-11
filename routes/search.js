var helpers = require('../helpers');
var request = require('request');
var constants = require('../constants');

exports.searchByTitle = function(req,res){
    
    var searchQuery = req.body.query;
    var url = constants.queries.search();
    var searchData = buildSearchQuery(searchQuery);
   var headers = helpers.setHeaders(url,searchData);
    request(headers,function(error,response,body){
        
        return res.send(body.hits.hits);
    });  
    
};

function buildSearchQuery(searchTerm){
    
var query = {  
    "fields" : ["title","wordCount"],
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
                            
                            "query" : searchTerm,
                            "slop" : 1    
                         }
                    
                        }        
                    },
                    {
                        "match":{
                            "caption" : searchTerm
                        }
                    }
                ]
            }
        }
    };
    
    return query;
}


    
 