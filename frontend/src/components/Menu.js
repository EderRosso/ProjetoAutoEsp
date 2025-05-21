import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledMenu = styled.div`
    background: #58617b;
    color: white;
    min-height: 10vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;

    ul{
        display: flex;
        list-style: none;
    }

    li{
        padding-left: 2rem;
    }

    a{
        color: white;
        text-decoration: none;
        &:hover{
            background-color: rgb(46, 90, 104);
            color: white;
        }
    }
`

const Menu = () => {
    return (
        <StyledMenu>
            <h1>ERSTec</h1>
            <ul><Link to='/'></Link>
                <li><Link to='/'>Bem-vindo</Link></li>
                <li><Link to='/medidas'>Medidas</Link></li>
                <li><Link to='/administrador'>Administração</Link></li>
                <li><Link to='/mensagens'>Mensagens</Link></li>
            </ul>
        </StyledMenu>
    )
}

export default Menu;