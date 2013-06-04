exports.queries = {
    
     databaseUrl : 'http://localhost:9200/',
    
     paginationSize : 10,
    
     blogIndex : function(){
         
         return this.databaseUrl+'blog/';
     },
    
    postType : function(){
        
        return this.blogIndex()+'post/';
    },
    
    recentPosts : function(){
    
    return this.postType()+'_search';
    
    }
};