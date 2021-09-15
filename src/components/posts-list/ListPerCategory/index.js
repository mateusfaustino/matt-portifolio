import Item from "../Main/Item";
//import Pagination from "./Pagination";
import { useSpacing } from "../../../contexts/SpacingContext";
import {Header, Container} from './styles'
import { postMoldel } from "../../../models/Post";

const List = ({ category }) => {
  // Get the data of the current list.
  
  const {spacing,maxWidth} = useSpacing()
  const margin = spacing.margin
  
  const posts = postMoldel.indexByCategory(category.id);
  console.log("category by slug: ", category);
  console.log(posts);
  if(posts.length==0){
    return(
      <Container margin={margin} maxWidth={maxWidth}>
        <h2>Não há posts nesta página</h2>
      </Container>
    );
  }else{
    return (
      <Container margin={margin} maxWidth={maxWidth}>
        
      {posts.map((post)=>{
          return (
              <Item key={post.id} post={post} />
          )
      })}
        {/* {data.items.map(({ type, id }) => {
          const item = state.source[type][id];
          // Render one Item component for each one.
          const categorie = item.categories[0]
          //return <Item key={item.id} item={item} />
        })} */}
      </Container>
    );
  }
  
};

export default List;
