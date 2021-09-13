export default class Model{
    constructor(){
                
    }

    filterBy(array,key,value){
        let objects = array.filter(item=>(item[key] == value))
        return objects
    }
    
}
export const categoryMoldel = new Model;