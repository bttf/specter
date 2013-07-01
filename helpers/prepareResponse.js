var preferences = require('../preferences').preferences;
var commonHelpers = require('./prepareResponseHelpers');

exports.prepareResponse = function (data,fields){
	
	var summaryLength = preferences.summaryLength;
	var hasField = commonHelpers.hasField;	
	var hasFieldPostHtml = hasField("postHtml",fields);
	var hasFiledPostedOn = hasField("postedOn",fields);
	
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

