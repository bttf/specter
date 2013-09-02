var request = require('request');
var helpers = require('../helpers');
var constants = require('../constants');

exports.getArchives = function(req,res){

request(buildArchivesQuery(),function(error,response,body){

	if(error||!body) console.log(error);
	console.log(body);
});

}

function buildArchivesQuery(){

	var query = {

		"match_all" :{},
		"fields": ["postedBy","postedOn","title","wordCount","date","tags"]
	};

	var url = constants.query.search();
	var headers = helpers.setHeaders(url,query);
	return headers;
}
