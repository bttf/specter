    var deleteViewModel = function(){
    
    var self = this;
        
    self.secret = ko.observable();
        
    self.deleteEnabled = ko.computed(function(){
            
    return  self.secret() ? true :false;  
    
    });
        
    self.deletePost = function(){
        
       var data = self.getPostToDelete();
        console.log(data);
    };   
    
    self.getPostToDelete = function(){
        
        var post = {};
        var data = $("#title").data();
        post.id = data.id;
        post.postedBy = data.by;
        post.secret = self.secret();
        
        return post;
    };
    
};

ko.applyBindings(new deleteViewModel());