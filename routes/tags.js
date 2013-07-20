var helpers = require('../helpers');
var request = require('request');
var preferences = require('../preferences').preferences;


exports.getTaggedPosts = function(req,res){
}

function buildTagQuery(tag){
	
	var query = {
		"fields" : preferences.tagIndex.fields,
		"size" : preferences.tagIndex.paginationSize,
		"query" : {
			"term" :{
				"tag" : tag
			}
		}
	}
	
}