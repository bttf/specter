var cheerio = require('cheerio');
var preferences = require('../preferences').preferences;

exports.prepareSearchResponse = function (data){
	
	if(hasField("postHtml")&&preferences.searchResultsSummaryLength>0&&hasField("postedOn")){
		preparePostSummaryAndDate(data);
	}
	
	if(hasField("postHtml")&&preferences.searchResultsSummaryLength>0&& !hasField("postedOn")){
		preparePostSummary(data);
	}
	
	if(hasField("postedOn")){
		
		preparePostDate(data);
		
	   }
    
    return data;
};

function hasField(field){
	
	return preferences.searchResultsFileds.indexOf(field)>-1;
};


function preparePostSummaryAndDate(data){
	data.forEach(function(item,index,arr){        
      
		var summary =  getPostSummary(item);
		 summary.fields.postedOn = new Date(item.fields.postedOn).toDateString();
		return summary;
    });
    return data;
}

function preparePostSummary(data){
	
	data.forEach(function(item,index,arr){      
		  	return getPostSummary(item);
    });
    return data;
}

function preparePostDate(data){
	data.forEach(function(item,index,arr){      
		   item.fields.postedOn = new Date(item.fields.postedOn).toDateString();			
			return item;
    });
    return data;
}

function getPostSummary(item){
	var $ = cheerio.load(item.fields.postHtml);
			item.fields.postHtml = $('<div/>').append($("*").slice(0,preferences.summaryLength)).html();
			return item;
};