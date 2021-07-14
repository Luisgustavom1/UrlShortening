import React, { useContext } from 'react'
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
    p{
        font-size: .8rem;
        font-weight: 500;
    }
    button{
        width: 6rem;
        border-radius: 8px;
    }
    button.active{
        background-color: ${props => props.colors.DarkViolet}            
    }
`
const NewUrl = styled.p`
    margin-left: 12rem;
    color: ${props => props.colors.Cyan}
`
export default function Urls(props){
    const {urlShorten} = useContext(AppContext)
    return(
        <BoxUrls>
            <UrlsCard colors={props.colors}>
                <p>{urlShorten !== null && urlShorten.result.original_link}</p>
                <NewUrl colors={props.colors}>{urlShorten !== null && urlShorten.result.full_short_link}</NewUrl>
                <props.Button>Copy</props.Button>
            </UrlsCard>
        </BoxUrls>
    )
}