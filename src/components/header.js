import React from 'react'
import styled from 'styled-components'
import logo from '../assets/images/logo.svg'

export default function Header(props){
    const Header = styled.header`
        display: flex;
        align-items: center;
        width: 70%;
        margin: 2.5rem auto;
        .btns{
            display: flex;
            margin: 0 45%;
            gap: 1rem;
        }

    `
    const Nav = styled.nav`
        display: flex;
        gap: 1rem;
        margin-left: 2.5rem;
        p{
            color: ${props.colors.GrayishViolet};
            font-weight: 700;
            font-size: .8rem;
        }
    `
    return(
        <Header>
            <div> <img src={logo} alt='Imagem da logo'></img></div>
            <Nav>
                <p>Features</p> 
                <p>Pricing</p>  
                <p>Resources</p>
            </Nav>
            <div className='btns'>
                <props.ButtonOutlined id='login'>Login</props.ButtonOutlined>
                <props.Button id='signup'>Sign Up</props.Button>
            </div>
        </Header>
    )
}