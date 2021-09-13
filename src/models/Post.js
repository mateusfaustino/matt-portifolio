import posts from '../database/posts'
export default class Post{

    constructor(){
        this.posts=posts;        
    }
    index(){
        return (
            this.posts
        )
    }
    showBySlug(slug){
       let post = this.posts.filter(post=>(post.slug == slug))
        return post[0]
    }
}
export const postMoldel = new Post;