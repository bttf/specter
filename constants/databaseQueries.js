exports.queries = {
    
     databaseUrl : 'http://localhost:9200/',
     blogIndex : function(){
         
         return this.databaseUrl+'blog/';
     },
    
    postType : function(){
        
        return this.blogIndex()+'post/';
    }
};