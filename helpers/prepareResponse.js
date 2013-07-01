var cheerio = require('cheerio');
var preferences = require('../preferences').preferences;
var commonHelpers = require('./commonHelpers');

exports.prepareResponse = function (data){
	
	var summaryLength = preferences.summaryLength;
	var hasField = commonHelpers.hasField;
	var pageFileds = preferences.pageFields;
	var hasFieldPostHtml = hasField("postHtml",pageFileds);
	var hasFiledPostedOn = hasField("postedOn",pageFileds);
	
	if(hasFieldPostHtml && summaryLength>0 && hasFiledPostedOn){
		commonHelpers.preparePostSummaryAndDate(data,summaryLength);
	}
	
	if(hasFieldPostHtml&& summaryLength>0 && ! hasFiledPostedOn){
		commonHelpers.preparePostSummary(data,summaryLength);
	}
	
	if(hasFiledPostedOn){
		
		commonHelpers.preparePostDate(data);
		
	   }
    
    return data;
};


