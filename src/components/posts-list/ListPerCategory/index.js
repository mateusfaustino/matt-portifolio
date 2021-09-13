import Item from "../Main/Item";
//import Pagination from "./Pagination";
import { useSpacing } from "../../../contexts/SpacingContext";
import {Header, Container} from './styles'
import { postMoldel } from "../../../models/Post";
import { categoryModel } from "../../../models/Category";
import {useParams} from "react-router-dom";
import Category from "../../../pages/categories";

const List = ({ state }) => {
  // Get the data of the current list.
  let { urlSlug } = useParams();
  const {spacing,maxWidth} = useSpacing()
  const margin = spacing.margin
  const category = categoryModel.showBySlug(urlSlug);
  const posts = postMoldel.indexByCategory(category.id);
  console.log("category by slug: ", category);
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
