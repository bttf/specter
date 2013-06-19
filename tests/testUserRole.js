var helpers = require('../helpers');
var mock = require('../mockContributors.js');


exports.testAdminRole = function(test){
	
	var contributor = helpers.getContributor.getRoleFromSecret(mock.contributors,'dont#fail@')
	
	test.equal(contributor.role,'admin');
	test.equal(contributor.details.name,'Akshat Jiwan Sharma');
};