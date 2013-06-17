var constants = require('../constants');

exports.pagination = {
	
getPaginationParameters	:function (pageNo,paginationSize){
	
	//If the page number parameter is undefined the page is first page
    if(!pageNo){return 0;}
	
	
    return pageNo ? pageNo*paginationSize -(paginationSize+1) : 0; 
},

hasPrevButton: function (pageNo){
    return pageNo? pageNo-1:false;
},

hasNextButton:function (total,pageNo){
    
    return total=== constants.queries.paginationSize?pageNo+2:false;
}

};