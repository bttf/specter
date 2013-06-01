var constants = require('../constants');
var contributors = constants.contributors;

exports.getRoleFromSecret = function(secret){
    
    if(contributors.admin.secret===secret){
        
        return contributors.admin; 
    }
    
    else{
        
        var users = contributors.users.length;
        var guests = contributors.guests.length;
        
        for(var i = 0; i<users; i++){
            
            var contributor = contributors.users[i];
            if(contributor.secret===secret){
                
                return contributor;
            }
        }
        
        for(var i =0; i<guests;i++){
            
            var contributor = contributors.guests[i];
            if(contributor.secret===secret){return contributor;}
        }
        
        return false;
    }
};