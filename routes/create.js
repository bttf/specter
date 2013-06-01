var constants = require('../constants');
var contributors = constants.contributors;

exports.newPost = function(req,res){
    return res.render(constants.views.createPost);
};

exports.addPost = function(req,res){
    
};