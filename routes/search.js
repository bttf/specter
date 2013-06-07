var helpers = require('../helpers');
var request = require('../request');

exports.searchByTitle = function(req,res){
    
    var searchQuery = req.body.query;
    console.log(searchQuery);
    
    
    return res.send(response);
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
