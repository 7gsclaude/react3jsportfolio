import { MeshDistortMaterial } from '@react-three/drei';
import React from 'react'
import { Sphere } from '@react-three/drei';
import styled from 'styled-components';
import Navbar from "./Navbar";

import { Canvas } from 'react-three-fiber';
import { OrbitControls } from '@react-three/drei';
 

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 780px) {
    height: 200vh;
  }
`;
//width: 100% is to make it responsive but video has 1400px width
const Container = styled.div`
    height: 100%;
    width: 90%;
    scroll-snap-align: center;
    display: flex;
    justify-content: space-between ;

    @media only screen and (max-width: 780px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
    }
`
const Left = styled.div`
flex: 2;
display: flex;
flex-direction: column;
justify-content: center;
gap: 20px;
@media only screen and (max-width: 780px) {
    flex: 1;
    align-items: center;

    }
`;
const Right = styled.div`
flex: 3;
position: relative;

@media only screen and (max-width: 780px) {
    flex: 1;
    width: 100%;
}
`;

const Title = styled.h1`
    font-size: 74px;


    @media only screen and (max-width: 780px) {
    text-align: center;
}

`;
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

@media only screen and (max-width: 780px) {
    padding: 20px;
    text-align: center;
}

`;
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
  width: 60%;  
  height: 60%;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 30%;
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


  @media only screen and (max-width: 780px) {
    width: 300px;
    height: 300px;
    bottom: 0%;


    @keyframes animate{
    to{
        transform: translateY(20px);

    }


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
            <Line src="./img/line.png" />
            <Subtitle>What I do</Subtitle>
          </WhatWeDo>
          <Description> I love growing corals and programming</Description>
          <Button>Learn more</Button>
        </Left>
        <Right>
          <Canvas camera={{ fov: 25, position: [5,30,30] }}>
            <OrbitControls enableZoom={false} autoRotate />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
           <Sphere args={[2,400,600]} scale={3}>
          <MeshDistortMaterial
           color="#560094" 
           attach="material" 
           distort={0.5} 
           speed={2}/>
            </Sphere>
          </Canvas>
          <Img src="./img/rapunzeltorch.jpeg" />
        </Right>
      </Container>
    </Section>
  );
}

export default Hero