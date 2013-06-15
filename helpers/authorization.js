exports.isUserAuthorized = function(contributor,name){
	
	return contributor.role === 'admin' || contributor.details.name === name;
};