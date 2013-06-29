var cheerio = require('cheerio');
var preferences = require('../preferences').preferences;

exports.prepareResponse = function (data){
	//check preferences here.
    data.forEach(function(item,index,arr){        
      if(hasField("postedOn")){
		   item.fields.postedOn = new Date(item.fields.postedOn).toDateString();
	  }
        
		
		if(hasField("postHtml")&&preferences.summaryLength>0){
			
			var $ = cheerio.load(item.fields.postHtml);
			item.fields.postHtml = $('<div/>').append($("*").slice(0,preferences.summaryLength)).html();
			console.log(item.fields.postHtml);
	}
		
		return item;
    });
    
    return data;
};

function hasField(field){
	
	return preferences.pageFields.indexOf(field)>-1;
};

function fullPost(){
}
