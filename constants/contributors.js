var dotenv = require('dotenv');
dotenv.load();

//In decreasing order of privileges admin > user > guest. 

exports.contributors = {
    
    admins :[ {
        
        name : "adnan",
        secret : process.env.ADNAN_PASS,
        about : ''
        
    }],
    
    users : [
        
        //{
            //name : "user01",
            //secret : 'get@creative#',
            //about : ''
        //}
    ],
    
    guests : [
        {
            name : 'guest01',
            secret : process.env.GUEST_PASS,
            website : ''
        }
    ]
};
