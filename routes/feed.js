var feed = require('feed');
var request = require('request');
var preferences = require('preferences').preferences;
var helpers = require('../helpers');
var constants = require('../constants');

exports.getFeeds = function(req,res){
	
	var type = req.params.type;
	var url = constants.queries.search();
	var headers = helpers.setHeaders(url,getRecentFeedsQuery());
	var atom = preferences.feeds.atom;
	var rss = preferences.feeds.rss;
	
	if(!(rss||atom)){return res.send(404)};
	
	request(headers,function(error,response,body){
		
		if(error||body.error) return res.send(500);
		console.log(data);
		
		
		
	});
	
};


function getRecentFeedsQuery(){
	
	var queryData = {
      "sort" :{ "postedOn" : {"order" : "desc"}},
	   "fields" :['postedOn','postTitle','postedBy','postHtml'],
		"from" : 0,
		"size" : preferences.feeds.paginationSize
    };
	
	return queryData;
}

function buildResponse(){
}