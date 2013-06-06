var searchViewModel = function(){
    var self = this;
    self.searchText = ko.observable();
    self.searchResults = ko.observableArray();
    
    self.search = function(){
        var postData = {};
        var query = self.searchText();
        postData.query = query;
        console.log(self.hasAppropriateLength());
        
            
            $.post('/searchByTitle',postData,function(data){
                
                self.searchResults(data);
            });
        
    };
    
    self.hasAppropriateLength = ko.computed(function(data,event){
        
        var text = self.searchText();
        console.log(event);
        return text? text.length>=3 ? self.search():false:false;
    });
    
    
    
     
};

ko.applyBindings(new searchViewModel());