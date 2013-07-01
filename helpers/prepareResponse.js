var cheerio = require('cheerio');
var preferences = require('../preferences').preferences;
var commonHelpers = require('./commonHelpers');

exports.prepareResponse = function (data){
	
	var summaryLength = preferences.summaryLength;
	
	if(hasField("postHtml")&&summaryLength>0&&hasField("postedOn")){
		commonHelpers.preparePostSummaryAndDate(data,summaryLength);
	}
	
	if(hasField("postHtml")&&summaryLength>0&& !hasField("postedOn")){
		commonHelpers.preparePostSummary(data,summaryLength);
	}
	
	if(hasField("postedOn")){
		
		commonHelpers.preparePostDate(data);
		
	   }
    
    return data;
};


