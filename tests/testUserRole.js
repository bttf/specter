var helpers = require('../helpers');
var mock = require('./mockContributors.js');


exports.testAdminRole = function(test){
	
	var contributor = helpers.getContributor.getRoleFromSecret('dont#fail@',mock.contributors);
	var admin = {
		admins:[
			{
				"name":"Akshat Jiwan Sharma",
				'secret' : 'hey'
			}
		]
	};
	var justAdmin = helpers.getContributor.getRoleFromSecret('hey',admin)	
	test.equal(contributor.role,'admin');
	test.equal(contributor.details.name,'Akshat Jiwan Sharma');
	test.equal(justAdmin.role,admin);
	test.equal(justAdmin.details.name, 'Akshat Jiwan Sharma');
	test.done();
};