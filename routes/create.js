var constants = require('../constants');
var helpers = require('../helpers');

exports.newPost = function(req,res){
    return res.render(constants.views.createPost);
};

exports.addPost = function(req,res){
    
    var postData = req.body;
    
    var secret = postData.secret;
    
    //check if the user is a contributor
    
    var contributor = helpers.getContributor.getRoleFromSecret(secret);
    var preparedPost = preparePostForSaving(postData);
    
  return  contributor ? savePost(preparedPost) : res.send({error:"Bad secret"},400);
    
};


function preparePostForSaving(postData,contributor){
    console.log(contributor);
    postData["postedBy"] = contributor.name;
    postData["about"] = contributor.about? contributor.about: contributor.website
    postData["postedOn"] = Date.now();
   return postData;
}   

function savePost(postData){
    console.log(postData);
    return res.send(200);
}