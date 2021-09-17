import Item from "./Item";
//import Pagination from "./Pagination";
import { useSpacing } from "../../../contexts/SpacingContext";
import {Header, Container} from './styles'
import { postMoldel } from "../../../models/Post";
import {useParams} from "react-router-dom";
const List = ({ state }) => {
  // Get the data of the current list.
  const {spacing,maxWidth} = useSpacing()
  const margin = spacing.margin;
  let { pageNumber } = useParams();

  if(pageNumber) postMoldel.setPage(pageNumber);

  const posts = postMoldel.index(10);
  if(posts.length<=0){
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
