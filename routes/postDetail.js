var constants = require('../constants');
var request = require('request');

exports.postDetail = function(req,res){
  
    var id = req.params.id;
    var url = constants.queries.postType()+id;
    request(url,function(error,response,body){        
        console.log(body);
    });
    
};