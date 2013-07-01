exports.getContributor = require('./getUserRole');
exports.setHeaders = require('./setHeaders').setHeaders;
exports.authorization = require('./authorization');
exports.pagination = require('./pagination').pagination;
exports.commonHelpers = require('./commonHelpers');
exports.prepareResponse = require('./prepareResponse').prepareResponse;
exports.prepareSearchResponse = require('./prepareSearchResponse').prepareSearchResponse;
exports.stripHtml  = function (html){
    
    return html.replace(/(<([^>]+)>)/ig,"");
}