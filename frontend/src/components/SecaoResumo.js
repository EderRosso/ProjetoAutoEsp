import React from "react";
import styled from 'styled-components'

const Inicio = styled.div`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
    color: black;
`

const Descricao = styled.div`
flex-direction: 1;
padding-right: 5rem;
h1{
    font-weight: bold;
    font-size: 3rem;
    color: yellow;
}
h2{
    font-weight: bold;
    font-size: 1.5rem;
    color: yellow;
}

`


const SecaoResumo = () => {
    return (
        <Inicio>
            <Descricao>
                <h1>Professor Éder de Rosso</h1>
                <h2>Quem sou</h2>
                <p>Meu nome é Éder Oliveira de Rosso,
                    tenho 38 anos e uma trajetória marcada
                    pelo compromisso com a educação técnica
                    e o desenvolvimento tecnológico.
                    Sou pós-graduado em Gestão e Docência no
                    Ensino Superior, além de possuir uma
                    especialização em Coordenação Pedagógica e
                    Supervisão Escolar. Minha formação de base
                    inclui o curso superior de tecnologia em
                    Análise e Desenvolvimento de Sistemas e o
                    curso técnico em Mecatrônica.
                    Atuo há mais de 10 anos como técnico de
                    laboratório no Colégio Ulbra São Lucas,
                    onde sou responsável pelo suporte técnico,
                    manutenção de equipamentos, organização
                    de espaços laboratoriais e apoio pedagógico
                    em aulas práticas. Nos últimos 4 anos,
                    expandi minha atuação para a sala de aula,
                    como professor dos cursos técnicos em
                    Informática. Nesse papel, busco alinhar
                    teoria e prática, contribuindo para a
                    formação de jovens preparados para os
                    desafios do mercado de trabalho.
                    Minha experiência em laboratório, aliada à
                    vivência docente, me permite compreender
                    profundamente o ambiente educacional técnico,
                    promovendo metodologias que valorizam a prática,
                    a resolução de problemas e a autonomia dos
                    estudantes. Tenho um olhar atento à inovação,
                    sempre buscando atualizar conteúdos e propor
                    atividades que desenvolvam competências
                    relevantes para a realidade tecnológica atual.
                    Acredito na educação como motor de transformação
                    e me dedico a formar profissionais éticos,
                    críticos e tecnicamente preparados.
                </p>
                <button>Entre em contato</button>
            </Descricao>
        </Inicio>
    );
}

export default SecaoResumo; 