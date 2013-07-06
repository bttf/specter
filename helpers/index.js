var cheerio = require('cheerio');
var $ = cheerio.load();

exports.getContributor = require('./getUserRole');
exports.setHeaders = require('./setHeaders').setHeaders;
exports.authorization = require('./authorization');
exports.pagination = require('./pagination').pagination;
exports.prepareResponse = require('./prepareResponse').prepareResponse;
exports.getPostSummary = function(item,preferredSummaryLength){
	
	item.fields.postHtml = $("<div></div>").html($(item.fields.postHtml.replace(/(\r\n|\n|\r)/gm,"")).slice(0,preferredSummaryLength)).html();
	return item;
};