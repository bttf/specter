var constants = require('../constants');
var contributors = constants.contributors;

exports.getRoleFromSecret = function(secret){ 
        
        var user = getUserFromSecret(secret);
        var guest = getGuestFromSecret(secret);
        var admin = getAdminFromSecret(secret);
    
    return admin ? admin : user? user:guest?guest:false;
    
};

function getUserFromSecret(secret){
    
    return contributors.users.filter(function(user){return user.secret===secret;});
}

function getAdminFromSecret(secret){
    
   return contributors.admins.filter(function(admin){return admin.secret===secret;});
}

function getGuestFromSecret(secret){
    
    return contributors.guests.filter(function(guest){return guest.secret===secret;});
}