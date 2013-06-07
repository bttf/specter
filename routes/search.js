var helpers = require('../helpers');
var request = require('request');
var constants = require('../constants');

exports.searchByTitle = function(req,res){
    
    var searchQuery = req.body.query;
    var url = constants.queries.search();
    var searchData = buildSearchQuery(searchQuery);
   var headers = helpers.setHeaders(url,searchData);
    request(headers,function(error,response,body){
        console.log(error);
        return res.send(body);
    });  
    
};

function buildSearchQuery(searchTerm){
    
var query = {  
    
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
                        "match" :{
                            
                            "postHtml" : searchTerm  
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
