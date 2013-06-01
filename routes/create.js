var constants = require('../constants');
var helpers = require('../helpers');
var cheerio = require('cheerio');

exports.newPost = function(req,res){
    return res.render(constants.views.createPost);
};

exports.addPost = function(req,res){
    
    var postData = req.body;
    
    var secret = postData.secret;
    
    //check if the user is a contributor
    
    var contributor = helpers.getContributor.getRoleFromSecret(secret);
    var preparedPost = preparePostForSaving(postData,contributor);    
    return  contributor ? savePost(preparedPost,res) : res.send({error:"Bad secret"},400);
    
};


function preparePostForSaving(postData,contributor){
    var $ = cheerio.load(postData.postHtml);
    postData["postedBy"] = contributor.name;
    postData["about"] = contributor.about? contributor.about: contributor.website
    postData["postedOn"] = Date.now();
    postData["postText"] = $("*").text();
   return postData;
}   

function savePost(postData,res){
            return res.send(200);
}