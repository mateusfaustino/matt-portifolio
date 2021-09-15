import posts from '../database/posts'
import Model from './Model';
export default class Post extends Model{

    constructor(){
        super()       
        this.posts=posts;
    }
    
    index(number, page) {
        var selected_posts=[];
        var firstPost = number*page;
        var lastPost = firstPost+number-1;
        for (let index = firstPost; index <=lastPost; index++) {
            if(this.posts[index]){
                selected_posts.push(this.posts[index]);
            }   
        }
        
        return  selected_posts;
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