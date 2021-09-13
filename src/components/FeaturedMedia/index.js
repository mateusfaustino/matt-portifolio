import { StyledImage, Container } from './styles'

const FeaturedMedia = ({post}) => {
  if (!post.featured_image) return null;
  
  const sourse = post.featured_image;
  
  return (
    <Container >
      <StyledImage
        alt={post.title}
        src={sourse}
      />
    </Container>
  );
};

export default FeaturedMedia;

