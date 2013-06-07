var constants = require('../constants');
var contributors = constants.contributors;

exports.getRoleFromSecret = function(secret){ 
        
        var user = getUserFromSecret(secret);
        var guest = getGuestFromSecret(secret);
        var admin = getAdminFromSecret(secret);
        var contibutor = admin.length>0 ? setContibutorDetails("admin",admin[0]) : user.length>0? setContibutorDetails("user",user[0]):guest.length>0?setContibutorDetails("guest",guest[0]):false;
        return contibutor;
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

function setContibutorDetails (role,data){
    
    var contributor = {
        
        role : role,
        details : data
    };
    
    return contributor;
}