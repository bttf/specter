var constants = require('../constants');
var request = require('request');
var helpers = require('../helpers');


exports.getPostToDelete = function(req,res){
    
    var id = req.params.id;
    var url = constants.queries.postType()+id;
    request(url,function(error,response,body){
        if(error)return res.send(404);
        return res.render(buildResponse(body),constants.views.deletePost);
    });
};

exports.deletePost = function(req,res){
    
    var id = req.body.id;
    var secret = req.body.secret;
    var url = constants.queries.postType()+id;
    
    var contributor = helpers.getContributor.getRoleFromSecret(secret);
    var condition = contributor.role ==='admin' || contributor.details.name === req.body.name;
    if(!condition) return res.send(403);
    request.del(url,function(error,res,body){
        
        if(error) return res.send(500);
        return res.send(200)
    });
};

function buildResponse(postDetail){
    var data = {};
    data.id = postDetail._id,
    data.title = postDetail._source.title;
    data.wordCount = postDetail._source.wordCount;
    data.postedBy === postDetail._source.posteBy;
    return data;    
}
