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
                <h2>Superior em Analise e Desenvolvimento de Sistemas</h2>
                <p>Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard
                    dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book.
                    It has survived not only five centuries,
                    but also the leap into electronic typesetting,
                    remaining essentially unchanged.
                    It was popularised in the 1960s with the release of
                    Letraset sheets containing Lorem Ipsum passages,
                    and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.

                </p>
                <button>Entre em contato</button>
            </Descricao>
        </Inicio>
    );
}

export default SecaoResumo; 