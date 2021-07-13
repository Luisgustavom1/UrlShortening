import React from 'react'
import styled from 'styled-components'
import bgBoost from '../assets/images/bg-boost-desktop.svg'

export default function Section(props){

    const Section = styled.section`
        background-image: url(${bgBoost});
        background-color: ${props.colors.DarkViolet};
        width: 100%;
        text-align: center;
        div{
            padding: 3rem 0;
        }
        button{
            width: 10rem;
            height: 3rem;
        }
    `
    const H1 = styled.h1`
        font-size: 2.3rem;
        color: white;
        margin-bottom: 1rem;
    `
    return(
        <Section>
            <div>
                <H1>Boost Your Links</H1>
                <props.Button>Get Started</props.Button>
            </div>
        </Section>
    )
}