exports.getContributor = require('./getUserRole');
exports.setHeaders = require('./setHeaders').setHeaders;
exports.authorization = require('./authorization');
exports.pagination = require('./pagination').pagination;
exports.prepareResponse = require('./prepareResponse').prepareResponse;
exports.stripHtml  = function (html){
    
    return html.replace(/(<([^>]+)>)/ig,"");
}