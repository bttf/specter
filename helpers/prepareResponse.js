var commonHelpers = require('./prepareResponseHelpers');

exports.prepareResponse = function (data,preferences){
	
	var summaryLength = preferences.summaryLength;
	var hasField = commonHelpers.hasField;
	var fields = preferences.pageFields; 	
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

