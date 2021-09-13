import categories from '../database/categories'
export default class Category{

    constructor(){
        this.categories=categories;        
    }
    index(){
        return (
            categories
        )
    }
}