import React from "react";
import styled from "styled-components";
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";
import Cube from "./Cube";



const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  
  
  justify-content: center;
`;
//width: 100% is to make it responsive but video has 1400px width
const Container = styled.div`
  height: 100vh;
  width: 100%;
  scroll-snap-align: center;
  display: flex;
  justify-content: space-between;
`;
const Left = styled.div`
  flex: 1;

  @media only screen and (max-width: 780px){
    display: none;
  } 
  
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

    @media only screen and (max-width: 780px) {
    align-items: center;
    text-align: center;

    }
`;

const Title = styled.h1`
  font-size: 74px;


    @media only screen and (max-width: 780px) {
        font-size: 60px;
    }
`;
const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Line = styled.img`
  height: 5px;
`;
const Subtitle = styled.h2`
  color: #e44660;
`;
const Description = styled.p`
  font-style: 24px;
  color: lightgray;
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


const Who = () => {
  return (
    <Section>
      <Container>
        <Left>
            
                  
          <Canvas camera={{fov:25, position:[5,5,5] }}>
            <OrbitControls enableZoom={false} autoRotate />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Cube />
          </Canvas>
          
                  
                
        </Left>
        <Right>
          <Title> Corals, and Coding</Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>Who I am</Subtitle>
          </WhatWeDo>
          <Description> I like coding</Description>
          <Button>See Projects gitlink</Button>
        </Right>
      </Container>
    </Section>
  );
};

export default Who;
