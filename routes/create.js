var constants = require('../constants');


exports.newPost = function(req,res){
    return res.render(constants.views.createPost);
};

exports.addPost = function(req,res){
    console.log(contributors);
};