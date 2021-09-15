import posts from '../database/posts'
import Model from './Model';
export default class Post extends Model{

    constructor(){
        super()       
        this.posts=posts;
        this.page=0;
    }

    setPage(pageNumber){
        this.page=pageNumber;
    }
    
    index(number, page) {        
        return  this.limit(this.posts,number, this.page);
    }
    getLenght(array){
        return array.length
    }
    
    indexByCategory(categoryId){
        const posts = this.posts.filter(post=>(post.categories[0] == categoryId))
        return this.limit(posts,2, this.page);
    }
    showBySlug(slug){
        const posts = this.filterBy(this.posts,'slug',slug);
        return posts[0]
    }
}
export const postMoldel = new Post;