var helpers = require('../helpers');
var request = require('request');
var constants = require('../constants');

exports.searchByTitle = function(req,res){
    
    var searchQuery = req.body.query;
    var url = helpers.databaseUrl.search();
    var searchData = buildSearchQuery(searchQuery);
    request(helpers.setHeaders(url,searchData),function(error,response,body){
        console.log(body);
    })  
    
};

function buildSearchQuery(searchTerm){
    
var query = {  
    
    "query":{
        "bool":{
            "must":{
                "match":{
                    "title":{
                        "query": searchTerm,
                        "operator": "and"    
                    }
                }
            },
                "should":[
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
}
