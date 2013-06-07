var constants = require('../constants');
var request = require('request');
var helpers = require('../helpers');


exports.updatePost = function(req,res){
  
    var dataToPost = req.body;
    if(!dataToPost){return res.send(400);}
    var url = constants.queries.postType()+dataToPost.id;
    var contributor = helpers.getContributor(dataToPost.secret);
    var condition = typeof contributor=== 'admins' || contributor.name === dataToPost.postedBy;
    if()
};