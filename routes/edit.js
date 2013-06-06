var tomarkdown = require('to-markdown').toMarkdown;
var constants = require('../constants');

exports.editPost = function(req,res){
    
    var id = req.params.id;
    var url = constants.queries.postType + 'id';
    request(url,function(error,response,body){
        
        console.log(body);
    })
};

function getMarkdownFromHtml(html){
    
    return tomarkdown(html);
}