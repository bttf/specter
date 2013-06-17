var constants = require('../constants');

exports.pagination = {
	
getPaginationParameters	:function (pageNo,paginationSize){
	
	//If the page number parameter is undefined the page is first page
    if(!pageNo){return 0;}	
	
    return pageNo*paginationSize -(paginationSize+(pageNo-1)); 
},

hasPrevButton: function (pageNo){
    return pageNo? pageNo-1:false;
},

hasNextButton:function (total,pageNo){
    
	if(!pageNo&&total=== constants.queries.paginationSize) return 2;
	return total=== constants.queries.paginationSize?parseInt(pageNo)+1:false;
}

};