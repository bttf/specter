var searchViewModel = function(){
    var self = this;
    self.searchText = ko.observable();
    self.searchResults = ko.observableArray();
    self.hasAppropriateLength = ko.computed(){
        
        return self.searchText().length>3 ? true:false;
    }
    self.search = function(){
        var postData = {};
        var query = self.searchText();
        postData.query = query;
        console.log(self.hasAppropriateLength())
        if(self.hasAppropriateLength()){
            
            $.post('/searchByTitle',postData,function(data){
                
                self.searchResults(data);
            })
        }
    };
    
    
     
}

ko.applyBindings(new searchViewModel());