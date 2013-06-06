var tomarkdown = require('to-markdown').toMarkdown;
var constants = require('../constants');
var request = require('request');

exports.editPost = function(req,res){
    
    var id = req.params.id;
    var url = constants.queries.postType() + id;
    console.log(url);
    request(url,function(error,response,body){
        if(!body) return res.send(404);
        console.log(body);
    })
};

function getMarkdownFromHtml(html){
    
    return tomarkdown(html);
}