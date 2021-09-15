export default class Model{
    constructor(){
                
    }

    filterBy(array,key,value){
        let objects = array.filter(item=>(item[key] == value))
        return objects
    }
    limit(array,number, page){
        var selected_posts=[];
        var firstPost = number*page;
        var lastPost = firstPost+number-1;
        for (let index = firstPost; index <=lastPost; index++) {
            if(array[index]){
                selected_posts.push(array[index]);
            }   
        }   
        return  selected_posts;
    }
    
}
export const categoryMoldel = new Model;