var cheerio = require('cheerio');
var preferences = require('../preferences').preferences;

exports.prepareResponse = function (data){
	//check preferences here.
    data.forEach(function(item,index,arr){        
      if(hasField("postedOn")){
		  return item.fields.postedOn = new Date(item.fields.postedOn).toDateString();
	  }
        if(hasField("postHtml")&&!hasField("summaryLength")){
			return item.fields.postHtml; 	
		}
		
		if(hasField("postHtml")&&hasField("summaryLength")){
			
			var $ = cheerio.load(item.fields.postHtml);
			item.fields.postHtml = $('<div/>').append($("*").slice(0,preferences.summaryLength)).html();
			return item.fields.postHtml;
		}
    });
    
    return data;
};

function hasField(field){
	
	return preferences.pageFields.indexOf(field)>-1;
}
