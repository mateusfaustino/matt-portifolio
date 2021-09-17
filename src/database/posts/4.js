import image from '../../public/storage/featured-media/featured2.png'
   
    const title = `Consulta de Endereço pelo CEP`;
    
    const slug = `consulta-de-endereco-pelo-cep`
    
    const excerpt = `Um app feito em React para consulta de endereço pelo CEP.`
    const content=
    `<!-- wp:paragraph -->
    <p></p>
    <!-- /wp:paragraph -->
    
    <!-- wp:embed {"url":"https://vimeo.com/583300948","type":"video","providerNameSlug":"vimeo","responsive":true} -->
    <figure class="wp-block-embed is-type-video is-provider-vimeo wp-block-embed-vimeo"><div class="wp-block-embed__wrapper">
    https://vimeo.com/583300948
    </div></figure>
    <!-- /wp:embed -->
    
    <!-- wp:heading -->
    <h2>Introdução</h2>
    <!-- /wp:heading -->
    
    <!-- wp:paragraph -->
    <p>Um web aplicativo feito em React que consome uma Rest Api de consulta de CEP.</p>
    <!-- /wp:paragraph -->
    
    <!-- wp:heading -->
    <h2>API</h2>
    <!-- /wp:heading -->
    
    <!-- wp:paragraph -->
    <p>O usuário está preenchendo um formulário. Ao digitar seu CEP, todos os campos referentes ao endereço são automaticamente preenchidos. Como isso é possível? A empresa possui todos os CEPS e seus respectivos endereços em sua base de dados? Imagina o custo e o trabalho para se manter isso! Felizmente, os Correios possuem uma Rest API. Funciona assim: O profissional responsável pelo formulário faz uma busca (que tecnicamente é chamada de fetch) pelos dados dos Correios. A interface que liga os dados ao formulário é chamada de API <em>, ou Application Programming Interface</em>&nbsp;que, traduzida para o português, pode ser entendida como uma interface de programação de aplicação.</p>
    <!-- /wp:paragraph -->
    
    <!-- wp:paragraph -->
    <p>Este aplicativo usa o mesmo conceito. Para fazer as requisições foi utilizada uma ferramenta chamada FETCH API.</p>
    <!-- /wp:paragraph -->
    
    <!-- wp:heading -->
    <h2>Telas</h2>
    <!-- /wp:heading -->
    
    <!-- wp:paragraph -->
    <p>Pela simplicidade deste app, é utilizada uma única tela na qual o usuário pode fazer sua consulta. O design foi pensado para ser responsivo em telas a partir de 320 pixels de largura. O conceito de silgle page aplication que o React oferece, proporciona ao usuário uma agradável experiência, sem a necessidade recarregar toda a tela a cada consulta.</p>
    <!-- /wp:paragraph -->
    
    <!-- wp:image {"id":326,"sizeSlug":"large","linkDestination":"none"} -->
    <figure class="wp-block-image size-large"><img src="https://kulucunay.files.wordpress.com/2021/09/blog-3-1024x576-1.png?w=1024" alt="" class="wp-image-57"/></figure>
    <!-- /wp:image -->
    
    <!-- wp:heading -->
    <h2>Projeto em produção</h2>
    <!-- /wp:heading -->
    
    <!-- wp:paragraph -->
    <p> Você pode ver este aplicativo em produção em <a href="https://mateusfaustino.github.io/consultar-endereco/" target="_blank" rel="noreferrer noopener">mateusfaustino.github.io/consultar-endereco/</a>. </p>
    <!-- /wp:paragraph -->
    
    <!-- wp:heading -->
    <h2>Código Fonte</h2>
    <!-- /wp:heading -->
    
    <!-- wp:paragraph -->
    <p> Este projeto é livre você pode ver o código fonte em <a href="https://github.com/mateusfaustino/consulta-de-endereco-pelo-cep">https://github.com/mateusfaustino/consulta-de-endereco-pelo-cep</a> .</p>
    <!-- /wp:paragraph -->
    `
const post ={
    id:'4',
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