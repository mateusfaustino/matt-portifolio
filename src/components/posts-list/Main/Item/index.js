import styled from "styled-components";
import { Link } from 'react-router-dom'
import FeaturedMedia from "../../../FeaturedMedia";
import { categoryModel } from "../../../../models/Category";
//import { PostDate } from "../../../Date";

/**
 * Item Component
 *
 * It renders the preview of a blog post. Each blog post contains
 * - Title: clickable title of the post
 * - Author: name of author and published date
 * - FeaturedMedia: the featured image/video of the post
 */
const Item = ({ post }) => {
  const author = 'Mateus Faustino';
  const category = categoryModel.show(post.categories[0])
  const categoryLink = post.slug;
  console.log("category: ",category);
  return (
    <Container to={"post/"+post.slug}>
      
        <FeaturedMedia post={post} />


        <Category>
          {category.title}
        </Category>
      
        <Title dangerouslySetInnerHTML={{ __html: post.title }} />
      

      
        {/* If the post has an excerpt (short summary text), we render it */}
        {post.excerpt && (
          <Excerpt dangerouslySetInnerHTML={{ __html: post.excerpt}} />
        )}
        {/* If the post has an author, we render a clickable author text. */}
        <Details>
           {author && (
            <StyledLink to="/">
              <AuthorName>
                Por <b>{author}</b>
              </AuthorName>
            </StyledLink>
          )} 
          <PublishDate>
            {" "}
             em <b>{post.date}</b>
          </PublishDate>
        </Details>
      


    </Container>
  );
};

// Connect the Item to gain access to `state` as a prop
export default Item;

const Title = styled.h1`
  grid-area: title;
  font-size: 2rem;
  color: rgba(12, 17, 43);
  margin: 0;
  box-sizing: border-box;
`;

const AuthorName = styled.span`
  color: rgba(12, 17, 43, 0.9);
  font-size: 0.9em;
  font-weight: 300;
    letter-spacing: normal;
    line-height: normal;
    text-transform: ;
    font-size: 0.75em;
    color: #6A6A6A;
`;
const Category = styled.span`
  grid-area: category;
  text-transform: uppercase;
  line-height: 12px;
  font-size: 12px;
  opacity: 1;
  visibility: visible;
  transition: opacity 0.24s ease-in-out 0s;
  margin-bottom: 5px;
  font-weight: 700;
  color: rgb(30, 115, 190) !important;
}
`;

const StyledLink = styled(Link)`
  padding: 15px 0;
`;

const PublishDate = styled.span`
  color: rgba(12, 17, 43, 0.9);
  font-size: 0.9em;
  font-weight: 300;
    letter-spacing: normal;
    line-height: normal;
    text-transform: ;
    font-size: 0.75em;
    color: #6A6A6A;
`;

const Excerpt = styled.div`
  grid-area: excerpt;
  line-height: 1.6em;
  color: rgba(12, 17, 43, 0.8);
`;
const Details = styled.div`
  grid-area: details;

`;
const Container = styled(Link)` 
  padding-top:16px;
  padding-bottom:16px;
  display: grid;
  grid-template-areas:
    "featured"
    "category" 
    "title "  
    "excerpt "
    "details "
    ; 
    grid-template-columns: 100%;
    gap:4px;
  border-bottom: 1px solid #cacaca;
  
`