var searchViewModel = function(){
    var self = this;
    self.searchText = ko.observable();
    self.searchResults = ko.observableArray();
    
    self.keypress = function(data,event){
        
        if (event.which === 13){
            
            
            if(self.searchResults().length>0){ 
                window.location.href = '/'+self.searchResults()[0]._id; 
            }
        }
        
        return true;
    }
    
    
    self.search = function(){
        var postData = {};
        var query = self.searchText();
        postData.query = query;
                
            
            $.post('/searchByTitle',postData,function(data){
                
                self.searchResults(data);
            });
        
    };
    
    self.hasAppropriateLength = ko.computed(function(data,event){
        
        var text = self.searchText();
        if(!text) return self.searchResults.removeAll();
        return text? text.length>=3 ? self.search():false:false;
    });
    
    
    
     
};

ko.applyBindings(new searchViewModel());