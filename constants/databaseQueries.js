exports.queries = {
    
     databaseUrl : 'http://localhost:9200/',
    
     paginationSize : 2,
     searchSize : 5,
    
     blogIndex : function(){
         
         return this.databaseUrl+'blog/';
     },
    
    postType : function(){
        
        return this.blogIndex()+'post/';
    },
    
    search : function(){
    
    return this.postType()+'_search';
    
    }
};