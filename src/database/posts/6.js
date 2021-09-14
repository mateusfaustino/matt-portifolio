import image from '../../public/storage/featured-media/featured07.jpg'
   
    const title = `Relógio Digital em React JS`;
    
    const slug = `relogio-digital-feito-em-react`
    
    const excerpt = `Um relógio digital usando javascript e React. Um projeto simples, mas importante para o aprendizado de React.`
    const content=
`<h2>
    Introdução
</h2>
<p>
    Este projeto é bem simples. Trata-se de uma tela com um relógio digital. Quando o usuário passa o mause por cima do
    relógio, ele acende uma luz, simulando o modo light de um relógio convencional.
</p>
<h2>
    Motivação
</h2>
<p>
    Esse foi um dos meus primeiros projetos em React. Além de buscar um padrão para meus projetos pessoais, eu queria
    treinar conceitos básicos de Javascript. Saber utilizar datas em JS é de extrema utilidade no desenvolvimento web.
</p>
<h2>
    Telas
</h2>
<p>
    O App consiste de uma tela de home, com uma barra superior e o relógio digital. Na barra se encontra um menu e um
    logotipo. Na versão mobile, essa barra esconde seu menu que pode ser acionado ao clicar no sandwitch button.
</p>
<figure class="wp-block-image size-large">
    <img class="alignnone size-full wp-image-24"
        src="https://kulucunay.files.wordpress.com/2021/09/01.jpg" alt="01" width="576" 
    />
</figure>
<h2>
    Projeto em produção
</h2>
<p>
    Você pode ver este aplicativo em produção em <a href="https://mateusfaustino.github.io/clock/" target="_blank"
        rel="noreferrer noopener">mateusfaustino.github.io/clock/</a>.
</p>
<h2>
    Código Fonte no GitHub
</h2>
<p>
    Você pode ver o código fonte deste projeto em <a href="https://github.com/mateusfaustino/react-digital-clock"
        target="_blank" rel="noreferrer noopener">github.com/mateusfaustino/react-digital-clock</a>
</p>
<h2>
    Pastas principais
</h2>
<p>
    Além dos arquivos app.js e index.js, bem familiares para quem programa usando o npx create-react-app, existem quatro
    pastas importantes para o projeto: assets, components, contexts e pages. Além disso , há um arquivo de configuração, o
    matt.settings.js onde serão definidas algumas variáveis, como os itens do menu.
</p>
<figure class="wp-block-image size-large">
    <img class="alignnone size-full wp-image-25"
        src="https://kulucunay.files.wordpress.com/2021/09/02.jpg" alt="02" width="576" />
</figure>
<p>
    Como os nomes bem sugerem, em components serão desenvolvidos todos os elementos que podem ser reaproveitados em todo o
    aplicativo, além do styleguide que será explicado mais na frente. Em pages serão desenvolvidas as páginas definidas por
    cada rota. As imagens usadas no App, como o logotipo, serão guardadas em assets. Na pasta context, serão guardado os
    contextos do App. Enquanto isso, services será usada para compor os serviços externos do App, tais como Rest APIs e
    firebase.
</p>
<h2>Styleguide</h2>
<p>
    A fim de manter todos os meus projetos pessoais com o design padronizado, criei um guia de estilos próprio baseado no
    Material Design, Atomic Design e, claro, em minhas preferências pessoais. Esse guia de estilos pode ser encontrado em
    components/styleguide.
</p>
<figure class="wp-block-image size-large"><img class="alignnone size-full wp-image-26"
        src="https://kulucunay.files.wordpress.com/2021/09/03.jpg" alt="03" width="1024" /></figure>
<p>
    Atoms? Molecules? Não! Isso não é um trabalho de biologia, portanto não se assuste com esses nomes. Como mencionado
    antes, o meu guia de estilos foi baseado no Atomic design, uma metodologia criada por Brad Frost para a criação de
    styleguides. Essa metodologia é inspirada bioquímica mas pode ser explicada de uma forma bem simples. Os átomos (atoms)
    são componentes mais simples e fundamentais de um estilo. Pode ser citado como exemplo cores, tipografia e sombras. No
    caso dos meus projetos a lista de átomos é extensa, pois foi feita para suprir qualquer projeto.
</p>
<figure class="wp-block-image size-large"><img class="alignnone size-full wp-image-27"
        src="https://kulucunay.files.wordpress.com/2021/09/04.jpg" alt="04" width="576" /></figure>

<p>
    Um exemplo de átomo são as cores (colors.js). Elas são definidas em forma de um objeto para que depois seja inserida por
    meio de CSS.
</p>        
<figure class="wp-block-image size-large"><img class="alignnone size-full wp-image-28"
        src="https://kulucunay.files.wordpress.com/2021/09/05.jpg" alt="05" width="576" /></figure>
<p>
    Essas variaveis de cores poderão ser chamadas no CSS dos componentes. Isso é possível graças ao Styled Component,
    ferramenta que permite usar CSS dentro do Javascript.
</p>
<figure class="wp-block-image size-large"><img class="alignnone size-full wp-image-29"
        src="https://kulucunay.files.wordpress.com/2021/09/06.jpg" alt="06" width="1024"  /></figure>
<p>
    Seguindo na lógica do Atomic Design, como você deve estar imaginando, as moléculas são elementos mais complexos que os
    átomos. Dois exemplos seriam os botões e a navbar. Não há, no entanto, uma regra rígida para definir o que é um átomo ou
    o que é uma molécula. Um botão, por exemplo pode ser entendido como um átomo ou molécula, dependendo do ponto de vista.
    
    Nessa metodologia existem forma mais complexas como os organismos e páginas. No entanto, a fim de simplificar meus
    projetos, decidi parar nas moléculas.
</p>
`
const post ={
    id:'6',
    date:"01/08/2021",
    visibility: true,
    categories:[1],
    title: title,
    slug: slug,
    excerpt:excerpt,
    featured_image:image,
    content:content
}
export default post;