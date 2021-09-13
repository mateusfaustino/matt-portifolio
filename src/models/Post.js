import posts from '../database/posts'
import Model from './Model';
export default class Post extends Model{

    constructor(){
        super()       
        this.posts=posts;
    }
    
    index() {
      return  this.posts;
    }

    indexByCategory(categoryId){
        const posts = this.posts.filter(post=>(post.categories[0] == categoryId))
        return posts
    }
    showBySlug(slug){
        const posts = this.filterBy(this.posts,'slug',slug);
        return posts[0]
    }
}
export const postMoldel = new Post;