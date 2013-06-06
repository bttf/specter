var searchViewModel = function(){
    var self = this;
    self.searchText = ko.observable();
    self.searchResults = ko.observableArray();
    self.hasAppropriateLength = function(item){
        
        return item.length>3 ? true:false;
    }
    self.search = function(){
        var postData = {};
        var query = self.searchText();
        postData.query = query;
        if(hasAppropriateLlength(query)){
            
            $.post('/searchByTitle',postData,function(data){
                
                self.searchResults(data);
            })
        }
    };
    
    
     
}

ko.applyBindings(new searchViewModel());