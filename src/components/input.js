import React, { useContext, useEffect, useState } from 'react'
import bgBoost from '../assets/images/bg-shorten-desktop.svg'
import styled from 'styled-components'
import AppContext from '../context/context'

const DivInput = styled.div`
    background-image: url(${bgBoost});
    background-color: ${props => props.colors.DarkViolet};
    width: 70%;
    margin: 0 auto;
    max-width: 100vw;
    display: flex;
    justify-content: center;
    align=items: center;
    gap: 2rem;
    padding: 2.3rem 2rem;
    border-radius: 8px;
    position: absolute;
    top: 95%;
    left: 50%;
    transform: translateX(-50%);
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
export default function UrlInput(props){
    const [url, setUrl] = useState('')
    const {urlShorten, setToUrlShorten} = useContext(AppContext)

    function handleUrl(){
        if(document.querySelector('#url').value.length !== 0){
            const UrlUpdate = JSON.parse(localStorage.getItem('urls')) || []  
            fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
                .then(res => res.json())
                .then(data => {
                    UrlUpdate.push(data.result)
                    setToUrlShorten(UrlUpdate)
                    localStorage.setItem('urls', JSON.stringify(urlShorten))
                })
                .catch(e => console.log(e))
        } else {            
            alert('Insira um URL')
        }
    }
    return(
        <DivInput colors={props.colors} href='/input'>
            <SrOnly>Shorter link here</SrOnly>
            <Input type='text' placeholder='Shorter link here' name='url' id='url' value={url} onChange={e => {setUrl(e.target.value)
            console.log(url)
        }
            }></Input>
            <props.Button onClick={() => handleUrl()}>Shorten it!</props.Button>
        </DivInput>
    )
}