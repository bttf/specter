var helpers = require('../helpers');
var mock = require('./mockContributors.js');


exports.testAdminRole = function(test){
	
	
	var contributor = helpers.getContributor.getRoleFromSecret('dont#fail@',mock.contributors)
	
	test.equal(contributor.role,'admin');
	test.equal(contributor.details.name,'Akshat Jiwan Sharma');
	test.done();
};