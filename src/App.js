import Header from './components/header'
import IllustrationAndTitles from './components/IllustrationAndTitles'
import Input from './components/input'
import Statistics from './components/statistics'
import Footer from './components/footer'

import styled, { createGlobalStyle } from 'styled-components'
import Section from './components/section'

function App() {
  const colors = {
    Gray: 'hsl(0, 0%, 75%)',
    GrayishViolet: 'hsl(257, 7%, 63%)',
    VeryDarkBlue: 'hsl(255, 11%, 22%)',
    VeryDarkViolet: 'hsl(260, 8%, 14%)',
    Red: 'hsl(0, 87%, 67%)',
    DarkViolet: 'hsl(257, 27%, 26%)',
    Cyan: 'hsl(180, 66%, 49%)'
  }
  const Button = styled.button`
    background-color: hsl(180, 66%, 49%);
    width: 5.2rem;
    height: 2.2rem;
    border-radius: 2rem;
    color: white;
    font-weight: 700;
    font-size: .8rem;    
    &:hover{
      background-color: hsl(180, 66%, 70%);
      cursor: pointer;
    }
  `
  const ButtonOutlined = styled.button`
    color: hsl(257, 7%, 63%);
    width: 5rem;
    height: 2rem;
    font-size: .8rem;    
    font-weight: 700;
    background-color: white;
    border-radius: 2rem;
    &:hover{
      cursor: pointer;
    }
  `
  const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    html{
        font-family: 'Poppins', sans-serif;
        font-size: 18px;
    }
    a, li, ul, ol{
      text-decoration: none;
    }
    button, input, textarea{
      border: none;
      outline: none;
    }
`;

  return (
    <>
      <GlobalStyle/>
      <Header colors={colors} Button={Button} ButtonOutlined={ButtonOutlined}></Header>
      <main style={{overflowX: 'hidden'}}>
        <IllustrationAndTitles colors={colors} Button={Button}></IllustrationAndTitles>
        <Input Button={Button} colors={colors}></Input>
        <Statistics colors={colors}></Statistics>
        <Section Button={Button} colors={colors}></Section>
        <Footer colors={colors}></Footer>
      </main>
    </>
  );
}

export default App;
