import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import AppContext from '../context/context'

const BoxUrls = styled.div`
    width: 70%;
    margin: 0 auto;
    padding: 1.1rem 0;
`
const UrlsCard = styled.div`
    background-color: white;
    display: flex;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: .6rem 1.3rem;
    margin-bottom: 1rem;
    p{
        font-size: .8rem;
        font-weight: 500;
    }
    button{
        width: 6rem;
        border-radius: 8px;
    }
    button.copied{
        background-color: ${props => props.colors.DarkViolet}            
    }
`
const NewUrl = styled.p`
    position: absolute;
    right: 25%; 
    color: ${props => props.colors.Cyan}
`
export default function Urls(props){
    const {urlShorten} = useContext(AppContext)
    function copyUrl(e){
        const buttons = document.querySelectorAll('.newUrlBtn')
        for(var c = 0; c < document.querySelectorAll('.newUrlBtn').length; c++){
            if(buttons[c].value == e.target.attributes[0].value){
                buttons[c].classList.add('copied')
                buttons[c].innerHTML = 'Copied!'
            }
        }
    }
    return(
        <BoxUrls>
            {urlShorten !== null ? urlShorten.map((urlShorten) => {
                return <UrlsCard colors={props.colors}>
                            <p>{urlShorten.original_link}</p>
                            <NewUrl colors={props.colors}>{urlShorten.full_short_link}</NewUrl>
                            <props.Button value={urlShorten.code} key={urlShorten.code} className='newUrlBtn' onClick={(e) => copyUrl(e)}>Copy</props.Button>
                        </UrlsCard>
            }) : ''}
        </BoxUrls>
    )
}