var request = require('request');
var helpers = require('../helpers');
var constants = require('../constants');

exports.getArchives = function(req,res){
console.log(buildArchivesQuery());
request(buildArchivesQuery(),function(error,response,body){

	if(error||!body) console.log(error);
	console.log(body);
});

}

function buildArchivesQuery(){

	var query = {
		"fields": ["postedBy","postedOn","title","wordCount","tags"],

		"query" : {

		"match_all" :{}
	}
		
};

	var url = constants.queries.search();
	var headers = helpers.setHeaders(url,query);
	return headers;
}
