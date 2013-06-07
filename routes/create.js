var constants = require('../constants');
var helpers = require('../helpers');
var slugs = require('slugs');
var request = require('request');
var queries = constants.queries;

exports.newPost = function(req,res){
    return res.render(constants.views.createPost);
};

exports.addPost = function(req,res){
    
    var postData = req.body;
    
    var secret = postData.secret;
    
    //check if the user is a contributor
    
    var contributor = helpers.getContributor.getRoleFromSecret(secret);
    var preparedPost = preparePostForSaving(postData,contributor);    
    return  contributor ? savePost(preparedPost,res) : res.send(400);
    
};


function preparePostForSaving(postData,contributor){
    postData["postedBy"] = contributor.details.name;
    postData["about"] = contributor.details.about? contributor.details.about: contributor.details.website
    postData["postedOn"] = Date.now();
    delete postData["secret"];
   return postData;
}   

function savePost(postData,res){
    
    var titleSlug = slugs(postData.title);
    var url = queries.postType()+titleSlug.toLowerCase();
    var headers = helpers.setHeaders(url,postData);
    request(headers,function(error,response,body){
        if(error) return res.send(500);
        return res.send(200);
    });
            
}