var request = require('request');
var helpers = require('../helpers');
var constants = require('../constants');

exports.getArchives = function(req,res){
console.log(buildArchivesQuery());
request(buildArchivesQuery(),function(error,response,body){

	if(error||!body) console.log(error);
	
	var dataToSend = buildResponse(body.hits.hits);
	return res.send(dataToSend);
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

function buildResponse(data){

	var uniqueTags = [];

	data.forEach(function(item){

		item.fields.postedOn = new Date(item.fields.postedOn).toDateString(); 
		var intersection = item.fields.tags.filter(function(tag){return uniqueTags.indexOf(tag)<0});
		uniqueTags.push.apply(uniqueTags,intersection);
		return item;
	});

	data.archiveTags = uniqueTags;
	console.log(data);
	return data;
}
