import image from '../../public/storage/featured-media/feartued1.png'
    const title = `React + Firebase App: Lista de tarefas (To do list)`;
    
    const slug = `react-firebase-app-lista-de-tarefas-to-do-list`
    
    const excerpt = `Um aplicativo com o front end em React e o back end feito com o firebase.`
    
    const content=
    `<h2>Introdução</h2>
    
    <p>Um Web app para administrar a lista de tarefas.</p>
    
    <h2>Projeto em produção</h2>
    
    <p>Este app pode ser encontrado em <a rel="noreferrer noopener" href="https://mateusfaustino.github.io/todo" data-type="URL" data-id="https://mateusfaustino.github.io/todo" target="_blank">https://mateusfaustino.github.io/todo</a> .</p>
    
    <h2>Código fonte</h2>
    
    <p>O código fonte deste app pode ser encontrado em <a href="https://github.com/mateusfaustino/todo-list-project" data-type="URL" data-id="https://github.com/mateusfaustino/todo-list-project">https://github.com/mateusfaustino/todo-list-project</a>.  </p>
    
    <h2>Requisitos/História do usuário</h2>
     
    
    <p>Eu, enquanto usuário do app, quero adicionar novas tarefas para não esquecer delas depois.</p>
    
    
    <p> Eu, enquanto usuário do app, quero visualizar as tarefas pendentes, bem como as tarefas concluídas, podendo diferenciar um tipo de outro.</p>
    
    <p> Eu, enquanto usuário do app, quero poder excluir uma tarefa quando quiser.</p>
    
    <p> Eu, enquanto usuário do app, quero poder me logar por minha conta do Google, sem precisar fazer um cadastro chato.</p>
    
    <h2>Login</h2>
    
    <p>Se o usuário não estiver logado na conta, aparecerá uma tela de login. </p>
    
    <figure class="wp-block-image size-large"><img src="https://kulucunay.files.wordpress.com/2021/09/react-firebase-app-lista-de-tarefas-to-do-list01.png?w=1024" alt="" class="wp-image-45"/></figure>

    <h2>Tela principal</h2>
    
    <p>Ao se logar, o usuário se deparará com uma tela em branco com um botão para que ele possa adicionar suas primeiras tarefas.</p>
    
    <figure class="wp-block-image size-large"><img src="https://kulucunay.files.wordpress.com/2021/09/react-firebase-app-lista-de-tarefas-to-do-list02.png?w=1024" alt="" class="wp-image-47"/></figure>
    
    <p>Ao clicar no botão, o usuário terá acesso à um modal flutuante, onde ele pode adicionar a nova tarefa.</p>
    
    <figure class="wp-block-image size-large"><img src="https://kulucunay.files.wordpress.com/2021/09/react-firebase-app-lista-de-tarefas-to-do-list03.png?w=1024" alt="" class="wp-image-49"/></figure>
    
    <p>Na medida em que o usuário vai adicionando tarefas, as podem ser visualizadas na tela principal.</p>
    
    <figure class="wp-block-image size-large"><img src="https://kulucunay.files.wordpress.com/2021/09/react-firebase-app-lista-de-tarefas-to-do-list04.png?w=1024" alt="" class="wp-image-51"/></figure>

    <p>Ao clicar na caixa (check-box) o usuário pode marcar a tarefa como feita. Então, para diferenciá-la das demais tarefas, sua cor mudará, indicando que já foi concluída. O usuário pode ainda excluir a tarefa ao clicar no ícone da lixeira.</p>
    
    <figure class="wp-block-image size-large"><img src="https://kulucunay.files.wordpress.com/2021/09/react-firebase-app-lista-de-tarefas-to-do-list05.png?w=1024" alt="" class="wp-image-53"/></figure>

    `
const post ={
    id:'1',
    title: title,
    slug: slug,
    visibility: true,
    categories:[1],
    excerpt:excerpt,
    featured_image:image,
    date:"31/08/2021",
    content:content
}
export default post;