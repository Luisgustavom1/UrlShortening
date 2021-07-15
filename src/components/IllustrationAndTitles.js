import React from 'react'
import styled from 'styled-components'
import Illustration from '../assets/images/illustration-working.svg'

export default function IllustrationAndTitles(props){
    const DivIllustration = styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;

        margin: 4rem 0 0 15%;
    `
    const DivTitles = styled.div`
        h1{
            color: ${props.colors.VeryDarkBlue};
            font-size: 4rem;
            font-weight: 700;
            line-height: 5rem;
        }
        p{
            color: ${props.colors.GrayishViolet};
        }

        .btn{
            width: 10rem;
            height: 2.6rem;
            font-size: .9rem;
            margin-top: 2rem;
        }
    `
    const DivImg = styled.div`
        position: relative;
        right: -8%;
    `
    return(
        <DivIllustration>
            <DivTitles>
                <h1>More than just shorter links</h1>
                <p>Build your brand's recognition and get detailed insights on how your links are performing</p>
                <props.Button className='btn' href='/input'>Get Started</props.Button>
            </DivTitles>
            <DivImg> <img src={Illustration} alt='Imagem da ilustração'></img></DivImg>
        </DivIllustration>
    )
}