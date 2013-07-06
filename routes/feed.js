var feedBuilder = require('feed');
var request = require('request');
var preferences = require('../preferences').preferences;
var helpers = require('../helpers');
var constants = require('../constants');

var feedPref = preferences.feed;


var feed = new feedBuilder({	
	
    title:          feedPref.title,
    description:    feedPref.description,
    link:           feedPref.link
    
});

exports.getFeeds = function(req,res){
	
	var type = req.params.type;
	var url = constants.queries.search();
	var headers = helpers.setHeaders(url,getRecentFeedsQuery());
	var atom = feedPref.atom;
	var rss = feedPref.rss;
	
	if(!(rss||atom)){return res.send(404)};
	
	request(headers,function(error,response,body){
		
		if(error||body.error) return res.send(500);
		
		
		
		
	});
	
};


function getRecentFeedsQuery(){
	
	var queryData = {
      "sort" :{ "postedOn" : {"order" : "desc"}},
	   "fields" :['postedOn','postTitle','postedBy','postHtml'],
		"from" : 0,
		"size" : feedPref.paginationSize
    };
	
	return queryData;
}

function buildResponse(data){
	
	data.forEach(function(item){
		
		feed.item({
			
			title : item._fields.title,
			link: feedPref.link + item._id,
			description : 
			
		});
	});
}