    var deleteViewModel = function(){
    
    var self = this;
        
    self.secret = ko.observable();
        
    self.deleteEnabled = ko.computed(function(){
            
    return  self.secret() ? true :false;  
    
    });
    
};

ko.applyBindings(new deleteViewModel());