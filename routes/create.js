var constants = require('../constants');
var helpers = require('../helpers');

exports.newPost = function(req,res){
    return res.render(constants.views.createPost);
};

exports.addPost = function(req,res){
    
    var postData = req.body;
    
    var secret = postData.secret;
    
    //check if the user is a contributor
    
  return  helpers.getContributor.getRoleFromSecret(secret) ? addVerifiedPost(postData,res) : res.send({error:"Bad secret"});
    
};


function addVerifiedPost(postData){
    
    console.log(postData);
   return res.send(200);
}   