var cheerio = require('cheerio');
var $ = cheerio.load();


exports.hasField = function (field,fields){
	
	return fields.indexOf(field)>-1;
};


exports.preparePostSummaryAndDate = function(data,preferredSummaryLength){
	data.forEach(function(item,index,arr){        
      
		var summary =  getPostSummary(item,preferredSummaryLength);
		 summary.fields.postedOn = new Date(item.fields.postedOn).toDateString();
		return summary;
    });
    return data;
};



exports.preparePostSummary = function(data,preferredSummaryLength){
	
	data.forEach(function(item,index,arr){      
		  	return getPostSummary(item,preferredSummaryLength);
    });
    return data;
};

exports.preparePostDate = function (data){
	data.forEach(function(item,index,arr){      
		   item.fields.postedOn = new Date(item.fields.postedOn).toDateString();			
			return item;
    });
    return data;
};

function getPostSummary (item,preferredSummaryLength){
	
	item.fields.postHtml = $("<div></div>").html($(item.fields.postHtml).slice(0,preferredSummaryLength)).html();
	return item;
};