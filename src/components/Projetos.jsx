

import "../styles/components/projetos.sass"



const Projetos = ()=>{
    return(
        <section className="projetos-container">
        <h2>Meus principais projetos</h2>

        <div className="bloco-projetos">
            <a href="https://movies-lib-lovat.vercel.app/" target="_blank">
                    <h4>Movies - Lib</h4>
                    <p className="descricao_projeto">Projeto de filmes com React e Api do TMDB (React Router, React Hooks).</p>
                    <p>Tecnologias utilizadas: React</p>
                </a>
            <a href="https://to-do-list-tau-steel-58.vercel.app/" target="_blank">
                    <h4>To- do - List</h4>
                    <p className="descricao_projeto">Projeto para listar, remover e sinalizar tarefas!</p>
                    <p>Tecnologias utilizadas: React e Styled-Components</p>
                </a>
            <a href="https://github.com/tarciana23/Lista-de-Participantes" target="_blank"> 
                    <h4>Lista-de-Participantes</h4>
                    <p className="descricao_projeto">Projeto de lista de participantes e API nlw-unite-nodejs.</p>
                    <p>Tecnologias utilizadas: React e e Tailwind!</p>
                </a>
            <a href="https://organo-hgff85rzr-tarciana23s-projects.vercel.app/" target="_blank">
                    <h4>Organo</h4>
                    <p className="descricao_projeto">Este projeto é para organização de times de uma empresa de tecnologia.</p>
                    <p>Tenologias utilizadas: React</p>
                </a>
            <a href="https://cadastro-fornecedor.vercel.app/" target="_blank">
                    <h4>Sistema de gerenciamento de fornecedores</h4>
                    <p className="descricao_projeto">Este projeto é um sistema para cadastrar e gerenciar fornecedores de maneira eficiente. Ele permite adicionar novos fornecedores, atualizar informações existentes, e visualizar uma lista completa de fornecedores cadastrados.</p>
                    <p>Tecnologias utilizadas: React e AntDesign</p>
                </a>
            <a href="https://cadastro-notas.netlify.app/" target="_blank">
                    <h4>RocketNotes</h4>
                    <p className="descricao_projeto">Neste projeto, cada usuário  poderá cadastrar uma conta e nela realizar suas anotações sobre diversos temas, como receitas,  tutoriais e em cada nota poderá inseir links e tags para facilitar na busca dessas posteriormente.</p>
                    <p>React e Styled-Components</p>
                </a>
            <a href="https://github.com/tarciana23/ignite-feed" target="_blank">
                    <h4>Ignite Feed</h4>
                    <p className="descricao_projeto"> Nele, é possível é possível cadastrar comentários sobre os posts fixos.</p>
                    <p>React, TypeScript e Css Module</p>
            </a>
            </div>
    </section>
    
    )
}

export default Projetos