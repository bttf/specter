var feed = require('feed');
var request = require('request');
var preferences = require('preferences').preferences

exports.getFeeds = function(req,res){
	
	var type = req.params.type;
};


function getRecentFeedsQuery(){
	
	var queryData = {
      "sort" :{ "postedOn" : {"order" : "desc"}},
	   "fields" :['postedOn','postTitle','postedBy'],
		"from" : 0,
		"size" : preferences.feeds.paginationSize
    };
	
	return queryData;
}