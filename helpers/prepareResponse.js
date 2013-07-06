var commonHelpers = require('./prepareResponseHelpers');
var helpers = require('../helpers');	

exports.buildResponse = function (common,optional){
	console.log(common.pageNo);
	var pageNo = common.pageNo;
	var preferences = common.preferences;
    var items = {};    
    items.hits = helpers.prepareResponse(common.data,preferences.index); 
    items.hasPrevious = helpers.pagination.hasPrevButton(pageNo);
    items.hasNext = helpers.pagination.hasNextButton(pageNo,common.total,preferences.index.paginationSize);
	items.isFirstPage = helpers.pagination.isFirstPage(items.hasPrevious);
    return items;
};


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

