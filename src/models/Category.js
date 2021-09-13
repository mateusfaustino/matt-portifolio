import categories from '../database/categories'
import Model from './Model';
export default class Category extends Model{

    constructor(){
        super();
        this.categories=categories;        
    }
    index(){
        return (
            this.categories
        )
    }
    show(id){
        let category = this.categories.filter(
            category=>(category.id == id))
        return category[0]
    }
    showBySlug(slug){
        const category = this.filterBy(this.categories,'slug',slug);
        return category[0]
    }
}
export const categoryModel = new Category;