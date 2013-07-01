var cheerio = require('cheerio');
var preferences = require('../preferences').preferences;
var commonHelpers = require('./commonHelpers');

exports.prepareResponse = function (data){
	
	if(hasField("postHtml")&&preferences.summaryLength>0&&hasField("postedOn")){
		preparePostSummaryAndDate(data);
	}
	
	if(hasField("postHtml")&&preferences.summaryLength>0&& !hasField("postedOn")){
		preparePostSummary(data);
	}
	
	if(hasField("postedOn")){
		
		preparePostDate(data);
		
	   }
    
    return data;
};


