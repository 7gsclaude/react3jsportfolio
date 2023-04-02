import React from 'react'
import styled from 'styled-components';
import Navbar from "./Navbar";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
//width: 100% is to make it responsive but video has 1400px width
const Container = styled.div`
    height: 100vh;
    width: 90%;
    scroll-snap-align: center;
    display: flex;
    justify-content: space-between ;
`
const Left = styled.div`
flex: 2;
display: flex;
flex-direction: column;
justify-content: center;
gap: 20px;
`
const Right = styled.div`
flex: 3;
position: relative;
`;

const Title = styled.h1`
    font-size: 74px;
`
const WhatWeDo = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;


`
const Line = styled.img`
height: 5px;

    
`
const Subtitle = styled.h2`
    color: #e44660;
`
const Description = styled.p`
    font-style: 24px;
    color: lightgray;
`
const Button = styled.button`
  background-color: #fc8b9e;
    color: white;
    font-weight: 500;
    width: 100px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;

// height 600 width 400px. wdith and height need to be even in order for border-radius to work .
const Img = styled.img`
  width: 80%;  
  height: 80%;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  border-radius: 80%;
  animation: animate 2s infinite ease alternate;
  
  @keyframes animate{
    to{
        transform: translateY(40px);
    }
  }

`



const Hero = () => {
  return (
      <Section>
          <Navbar />
          <Container>
              <Left> 
                  <Title> Corals, and Coding</Title>
                  <WhatWeDo>
                      <Line src="./img/line.png"/>
                      <Subtitle>
                          What I do 
                      </Subtitle>
                  </WhatWeDo>
                  <Description> I love growing corals and programming</Description>
                  <Button>
                      Learn more
                  </Button>
              </Left>
              <Right> 
                  {/*3d model*/}
                  <Img src="./img/rapunzeltorch.jpeg" />
              </Right>
          </Container>
      </Section>
  )
}

export default Hero