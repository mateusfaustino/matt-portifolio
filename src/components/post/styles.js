import { Link } from "react-router-dom";
import styled from "styled-components";
import typography from "../styleguide/atoms/typography";
export const Container = styled.div`
  width: 100%;
  max-width: ${({maxWidth})=>maxWidth ||"none"}; 
  padding: 54px ${({padding})=>padding ||0};
  margin:auto;

`;
export const Excerpt = styled.div`
  p{
    ${typography.postExcerpt}
  }
`
export const Title = styled.h1`
  margin: 0;
  margin-top: 24px;
  margin-bottom: 8px;
  color: rgba(12, 17, 43);''
  ${typography.postTitle}
  `;

export const StyledLink = styled.a`
  padding: 15px 0;
`;

export const Author = styled.p`
  color: rgba(12, 17, 43, 0.9);
  font-size: 0.9em;
  display: inline;
`;

export const DateWrapper = styled.p`
  color: rgba(12, 17, 43, 0.9);
  font-size: 0.9em;
  display: inline;
`;

/**
 * This component is the parent of the `content.rendered` HTML. We can use nested
 * selectors to style that HTML.
 */
export const Content = styled.div`
  color: #000;
  word-break: break-word;
  background:#fff;
  margin-top:16px;
  * {
    max-width: 100%;
  }
  
  p {
    ${typography.postContent}
    color: #000;
    margin-top:8px;
  }
  h1,h2,h3,h4,h5,h6{
    margin-top:32px;
  }
  h1{
    ${typography.header1}
  }
  h2{
    ${typography.header2}
  }
  h3{
    ${typography.header3}
  }

  img {
    width: 100%;
    object-fit: cover;
    object-position: center;
  }

  figure {
    margin: 24px auto;
    width: 100%;

    figcaption {
      font-size: 0.7em;
    }
    
  }
  
  iframe {
    display: block;
    margin: 0;
    width:100%;
    border:none;
    
  }
  

  blockquote {
    margin: 16px 0;
    background-color: rgba(0, 0, 0, 0.1);
    border-left: 4px solid rgba(12, 17, 43);
    padding: 4px 16px;
  }

  a {
    color: rgb(31, 56, 197);
    text-decoration: underline;
  }

  /* Input fields styles */

  input[type="text"],
  input[type="email"],
  input[type="url"],
  input[type="tel"],
  input[type="number"],
  input[type="date"],
  textarea,
  select {
    display: block;
    padding: 6px 12px;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 4px;
    outline-color: transparent;
    transition: outline-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    margin: 8px 0 4px 0;

    &:focus {
      outline-color: #1f38c5;
    }
  }

  input[type="submit"] {
    display: inline-block;
    margin-bottom: 0;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid #1f38c5;
    padding: 12px 36px;
    font-size: 14px;
    line-height: 1.42857143;
    border-radius: 4px;
    color: #fff;
    background-color: #1f38c5;
  }

  /* WordPress Core Align Classes */

  @media (min-width: 420px) {
    img.aligncenter,
    img.alignleft,
    img.alignright {
      width: auto;
    }

    .aligncenter {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }

    .alignright {
      float: right;
      margin-left: 24px;
    }

    .alignleft {
      float: left;
      margin-right: 24px;
    }
  }
`;
