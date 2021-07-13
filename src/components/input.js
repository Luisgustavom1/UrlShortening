import React from 'react'
import bgBoost from '../assets/images/bg-shorten-desktop.svg'
import styled from 'styled-components'

export default function Input(props){

    const DivInput = styled.div`
        background-image: url(${bgBoost});
        background-color: ${props.colors.DarkViolet};
        width: 70%;
        margin: 0 auto;
        max-width: 100vw;
        display: flex;
        justify-content: center;
        align=items: center;
        gap: 2rem;
        padding: 2.3rem 2rem;
        border-radius: 8px;
        button{
            border-radius: 8px;
            width: 7rem;
            height: 2.5rem;
        }
    ` 
    const SrOnly = styled.label`
        position: absolute;
        height: 1px;
        width: 1px;
        margin: -1px;
        padding: 0;
        overflow: hidden;
        clip-path: rect(0,0,0,0);
        white-space: nowrap;
        border-width: 0;
    `
    const Input = styled.input`
        width: 80%;
        border-radius: 8px;
        padding: .8rem 1.2rem;
        font-size: .8rem;
    `
    return(
        <DivInput>
            <SrOnly>Shorter link here</SrOnly>
            <Input type='text' placeholder='Shorter link here' name='url' id='url'></Input>
            <props.Button>Shorten it!</props.Button>
        </DivInput>
    )
}