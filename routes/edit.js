var tomarkdown = require('to-markdown').toMarkdown;
var constants = require('../constants');
var request = require('request');

exports.editPost = function(req,res){
    
    var id = req.params.id;
    var url = constants.queries.postType() + id;
    console.log(url);
    request(url,function(error,response,body){
        if(!body) return res.send(404);
        var parsed = JSON.parse(body);
        var markdownText = getMarkdownFromHtml(parsed._source.postHtml);
        return res.render(constants.views.createPost,{post:markdownText});
    })
};

function getMarkdownFromHtml(html){
    
    return tomarkdown(html);
}