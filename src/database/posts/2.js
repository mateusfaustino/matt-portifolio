import image from '../../public/storage/featured-media/featured2.png'
   
    const title = `Find an adress by ZIP code`;
    
    const slug = `find-an-adress-by-zip-code`
    
    const excerpt = `A React based app for consulting a brazilian adress by zip-code`
    
    const content=
    `<!-- wp:heading -->
    <h2>Introduction</h2>
    <!-- /wp:heading -->
    
    <!-- wp:paragraph -->
    <p>A Web application built in React that consume a ZIP code Rest API. </p>
    <!-- /wp:paragraph -->
    
    <!-- wp:heading -->
    <h2>API</h2>
    <!-- /wp:heading -->
    
    <!-- wp:paragraph -->
    <p>The user is filling in a form. When entering his zip code, all fields referring to the address are automatically filled. How is it possible? Does the company have all the zip codes and their respective addresses in its database? Imagine the cost and effort to maintain this! Fortunately, Correios (brazilian mail system) has a Rest API. Here's how it works: The professional responsible for the form makes a fetch for the Correios' data. The interface that connects the data to the form is called API , or Application Programming Interface.</p>
    <!-- /wp:paragraph -->
    
    <!-- wp:paragraph -->
    <p>This app uses the same concept. To make the requests, a tool called FETCH API was used.</p>
    <!-- /wp:paragraph -->
    
    <!-- wp:heading -->
    <h2>Screen</h2>
    <!-- /wp:heading -->
    
    <!-- wp:paragraph -->
    <p>Due to the simplicity of this app, a single screen is used on which the user can make their query. The design was thought to be responsive on screens starting at 320 pixels wide. The concept of single page application that React offers provides the user with a pleasant experience, without the need to reload the entire screen at each query.</p>
    <!-- /wp:paragraph -->
    
    <!-- wp:image {"id":326,"sizeSlug":"large","linkDestination":"none"} -->
    <figure class="wp-block-image size-large"><img src="http://mateusfaustino.com.br/wp-content/uploads/2021/08/blog-3-1024x576.png" alt="" class="wp-image-326"/></figure>
    <!-- /wp:image -->
    
    <!-- wp:heading -->
    <h2>Published Web App</h2>
    <!-- /wp:heading -->
    
    <!-- wp:paragraph -->
    <p>You can see this app at&nbsp;<a rel="noreferrer noopener" href="https://mateusfaustino.github.io/consultar-endereco/" target="_blank">mateusfaustino.github.io/consultar-endereco/</a>.</p>
    <!-- /wp:paragraph -->
    
    <!-- wp:heading -->
    <h2>source</h2>
    <!-- /wp:heading -->
    
    <!-- wp:paragraph -->
    <p>You can see the source at&nbsp;<a href="https://github.com/mateusfaustino/consulta-de-endereco-pelo-cep">https://github.com/mateusfaustino/consulta-de-endereco-pelo-cep</a>&nbsp;.</p>
    <!-- /wp:paragraph -->
    `
const post ={
    id:'2',
    date:"06/08/2021",
    visibility: true,
    categories:[1],
    title: title,
    slug: slug,
    excerpt:excerpt,
    featured_image:image,
    content:content
}
export default post;