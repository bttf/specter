exports.getContributor = require('./getUserRole');
exports.setHeaders = require('./setHeaders').setHeaders;
exports.authorization = require('./authorization');
exports.stripHtml  = function (html){
    
    return html.replace(/(<([^>]+)>)/ig,"");
}