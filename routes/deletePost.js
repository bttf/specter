var constants = require('../constants');
var request = require('../request');
var helpers = require(../helpers');

exports.deletePost = function(req,res){
    
    var id = req.params.id;
    var url = constants.queries.postType()+id;
    request.del(url,function(error,res,body){
        
        if(error) return res.send(500);
        return res.send(200)
    });
}