var constants = require('../constants');
var contributors = constants.contributors;

exports.getRoleFromSecret = function(secret){
    
    if(contributors.admin.secret===secret){
        
        return contributors.admin; 
    }
    
    else{
        
        var user = contributors.users.filter(function(user){return user.secret===secret});
        var guest = contributors.guests.filter(function(guest){return guest.secret===secret});
        
    }
    return false;
};