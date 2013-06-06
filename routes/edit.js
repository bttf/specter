var tomarkdown = require('to-markdown').toMarkdown;
var constants = require('../constants');
var request = require('request');
var cheerio = require('cheerio');
var helpers = require('../helpers');

exports.editPost = function(req,res){
    
    var id = req.params.id;
    var url = constants.queries.postType() + id;
     request(url,function(error,response,body){
        if(!body) return res.send(404);
        var parsed = JSON.parse(body);
        var html = removeFigureCaption( parsed._source.postHtml);
        var markdownText = getMarkdownFromHtml(html);
        var item = {
        post :helpers.stripHtml(markdownText),
        title : parsed._source.title
            }
        return res.render(constants.views.createPost,item);
    });
};

function getMarkdownFromHtml(html){
    
    return tomarkdown(html);
}

function removeFigureCaption(html){
    var $ = cheerio.load(html);
     $("figcaption").remove();
    return $.html();
}