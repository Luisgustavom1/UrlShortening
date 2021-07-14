import React from 'react'
import iconBrand from '../assets/images/icon-brand-recognition.svg'
import iconDetailed from '../assets/images/icon-detailed-records.svg'
import iconCustomizable from '../assets/images/icon-fully-customizable.svg'

import Urls from '../components/Urls'

import styled from 'styled-components'

export default function Statistics(props){
    const BgMain = styled.main`
        background-color: hsl(0, 0%, 95%);    
    `
    const Div = styled.div`
        padding: 6rem 0;
        color: ${props.colors.VeryDarkBlue};
        text-align: center;
            p{
                width: 30rem;
                margin: 1rem auto 4rem auto;
                color: ${props.colors.GrayishViolet}
            }
    `
    const Section = styled.section`
        display: flex;
        justify-content: space-around;
        width: 70%;
        margin: 0 auto;
    `
    const BgImg = styled.div`
        background-color: ${props.colors.DarkViolet};
        border-radius: 50%;
        width: 80px;
        height: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        top: -13%;
        left: 8%;
        img{
            width: 35px;
            height: 35px;
        }
    `
    const Cards = styled.div`
        background-color: white;
        border-radius: 8px;
        width: 18rem;
        height: 14rem;
        text-align: left;
        div{
            text-align: left;
            padding: 0 1.5rem;
            h1{
                font-size: 1.3rem;
            }
            p{
                width: 100%;
                font-size: .8rem;
                font-weight: 500;
            }
        }
    `
    const Span = styled.span`
        content: ' '; 
        background-color: ${props.colors.Cyan};       
    `
    return(
        <BgMain>
            <Urls colors={props.colors} Button={props.Button}></Urls>
            <Div>
                <h1>Advanced Statistics</h1>
                <p>Track how your links performing across the web with our advanced statistics dashboard</p>
                <Section>
                    <Cards style={{marginTop: '2rem'}}>
                        <BgImg><img src={iconBrand} alt='Icon Brand Recognition'></img></BgImg>
                        <div>
                            <h1>Brand Recognition</h1>
                            <p>Boot your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content</p>
                        </div>
                    </Cards>
                    <Span></Span>
                    <Cards style={{marginTop: '4rem'}}>
                        <BgImg><img src={iconDetailed} alt='Icon Deitaled'></img></BgImg>
                        <div>
                            <h1>Deitaled Records</h1>
                            <p>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions</p>
                        </div>
                    </Cards>
                    <Span></Span>
                    <Cards style={{marginTop: '6rem'}}>
                        <BgImg><img src={iconCustomizable} alt='Icon Brand Recognition'></img></BgImg>
                        <div>
                            <h1>Brand Recognition</h1>
                            <p>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
                        </div>
                    </Cards>
                </Section>
            </Div>
        </BgMain>
    )
}