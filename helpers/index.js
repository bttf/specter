exports.getContributor = require('./getUserRole');
exports.setHeaders = require('./setHeaders').setHeaders;
exports.stripHtml = function(html){
    
   return html.replace(/(<([^>]+)>)/ig,"");
};