import Item from "./Item";
//import Pagination from "./Pagination";
import { useSpacing } from "../../../contexts/SpacingContext";
import {Header, Container} from './styles'
import { postMoldel } from "../../../models/Post";

const List = ({ state }) => {
  // Get the data of the current list.
  const {spacing,maxWidth} = useSpacing()
  const margin = spacing.margin
  const posts = postMoldel.index();
 
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
};

export default List;
