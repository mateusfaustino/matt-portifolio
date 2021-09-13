import { useEffect } from "react";
import FeaturedMedia from "../FeaturedMedia";
import {Container, Title, StyledLink, Author, DateWrapper, Content, Excerpt} from './styles'
import { useSpacing } from "../../contexts/SpacingContext";
import { postMoldel } from "../../models/Post";
import {useParams} from "react-router-dom";
//import Html2React from "html2react";
//import dayjs from "dayjs"
//import {PostDate} from '../Date/index'
//import LanguageWidget from "../LanguageWidget";

const Post = () => {
  let { urlSlug } = useParams();
  const post = postMoldel.showBySlug(urlSlug);
  console.log(post);
  const {spacing, maxWidth} = useSpacing()
  const margin = spacing.margin
  if (post!=undefined) {
    return (
      <Container padding={margin} maxWidth={maxWidth}>
        <FeaturedMedia post={post} />

        <Title dangerouslySetInnerHTML={{ __html: post.title }} />
        <Excerpt dangerouslySetInnerHTML={{ __html: post.excerpt }} />
          
              <StyledLink >
                <Author>
                  por <b>Mateus Faustino</b>
                </Author>
              </StyledLink>
            )
            <DateWrapper>
              {" "}em <b>{post.date}</b>
            </DateWrapper>
          
         <Content dangerouslySetInnerHTML={{ __html: post.content }}/>
          Html2React=(post.content)
        
      
      </Container>    
  )        
  }else{
    return (
      <div>
        <br/>
        <br/>
        <br/>
        <br/>
        <h1>sem post</h1>
      </div>
    )
  }
  
  
  // const data = state.source.get(state.router.link);
  // const author = state.source.author[post.author];
  // const taxonomies = state.source.taxonomies
  // const pt_br_version = state.source.pt_br_version[post.pt_br_version]
  // const en_version = state.source.en_version[post.en_version]
  // const languagesArray = [];
  
  // function addLanguage(taxonomy,language){
  //   if (taxonomy){
  //     const languagesObject = {
  //       name:taxonomy.name,
  //       language:language
  //     }
  //     languagesArray.push(languagesObject)
  //   }
  // }
  // addLanguage(pt_br_version,'pt-br')
  // addLanguage(en_version,'en')
  // console.log("languagesArray:",languagesArray); 
  // const Html2React = libraries.html2react.Component;

  // /**
  //  * Once the post has loaded in the DOM, prefetch both the
  //  * home posts and the list component so if the user visits
  //  * the home page, everything is ready and it loads instantly.
  //  */

  
  // // Load the post, but only if the data is ready.
  // return data.isReady ? (
  //     {/* <LanguageWidget languages={languagesArray}/> */}
  //     <div>
  //       {/* Look at the settings to see if we should include the featured image */}
  //       {state.theme.featured.showOnPost && (
  //         <FeaturedMedia id={post.featured_media} />
  //       )}
  //       {/* Hide author and date on pages */}
  //       {!data.isPage && (
  //         <div>
  //           {author && (
  //             <StyledLink link={author.link}>
  //               <Author>
  //                 por <b>{author.name}</b>
  //               </Author>
  //             </StyledLink>
  //           )}
  //           <DateWrapper>
  //             {" "}em <b>{PostDate(post.date)}</b>
  //           </DateWrapper>
  //         </div>
  //       )}
  //     </div>

  //     {data.isAttachment ? (
  //       // If the post is an attachment, just render the description property,
  //       // which already contains the thumbnail.
  //       <div dangerouslySetInnerHTML={{ __html: post.description.rendered }} />
  //     ) : (
  //       // Render the content using the Html2React component so the HTML is
  //       // processed by the processors we included in the
  //       // libraries.html2react.processors array.
  //       <Content>
  //         <Html2React html={post.content.rendered} />
  //       </Content>
  //     )}
  //   </Container>
  // ) : null;
};

export default Post;

