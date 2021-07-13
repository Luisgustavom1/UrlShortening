import React from 'react'
import logo from '../assets/images/logo.svg'
import iconFace from '../assets/images/icon-facebook.svg'
import iconTwitter from '../assets/images/icon-twitter.svg'
import iconPinterest from '../assets/images/icon-pinterest.svg'
import iconInsta from '../assets/images/icon-instagram.svg'


import styled from 'styled-components'

export default function Footer(props){

    const Footer = styled.footer`
        background-color: ${props.colors.VeryDarkViolet};
    `
    const Container = styled.div`
        display: flex;
        align-items: center;
        justify-content: space-around;
        padding: 4rem;
        div{
            align-self: flex-start;
            display: flex;
            gap: 1rem;
        }
        img{
            align-self: flex-start;
            color: white;
        }
    `
    const Section = styled.section`
        color: white;
        font-size: .6rem;
        h1{
            margin-bottom: .5rem;
        }
        p{
            color: ${props.colors.Gray};
            font-weight: 500;
            margin-bottom: .5rem;
            &:hover{
                color: ${props.colors.Cyan}
            }
        }

    `
    return(
        <Footer>
            <Container>
                <img src={logo} alt='Imagem da logo'></img>
                <Section>
                    <h1>Features</h1>
                    <p>Link shortening</p>
                    <p>Branded links</p>
                    <p>analytics</p>
                </Section>
                <Section>
                    <h1>Resource</h1>
                    <p>Blogs</p>
                    <p>Developers</p>
                    <p>Support</p>
                </Section>
                <Section>
                    <h1>Company</h1>
                    <p>Our Team</p>
                    <p>Careers</p>
                    <p>Contact</p>
                </Section>
                <div>
                    <img src={iconFace} alt='Icone do facebook'></img>
                    <img src={iconTwitter} alt='Icone do Twitter'></img>
                    <img src={iconPinterest} alt='Icone do Pinterest'></img>
                    <img src={iconInsta} alt='Icone do Insta'></img>
                </div>
            </Container>
        </Footer>
    )
}