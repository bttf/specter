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
    console.log(contributor);
    
  return  contributor ? addVerifiedPost(postData,res) : res.send({error:"Bad secret"},400);
    
};


function addVerifiedPost(postData){
    
    console.log(postData);
   return res.send(200);
}   