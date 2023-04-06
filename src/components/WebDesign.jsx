import React from 'react'
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";
import ReactLogo from "./ReactLogo";
import styled from 'styled-components'

const Desc = styled.div`
    width: 200px;
    height: 70px;
    padding: 20px;
    background-color: #fc8b9e;
    color: white;
    border-radius: 10px;
    position: absolute;
    top: 100px;
    right: 100px;

    @media only screen and (max-width: 780px) {
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
    }
    

`

function WebDesign() {
    return (


      <>
        <Canvas>
          <ambientLight intensity={1} />

          <ReactLogo />
          <OrbitControls enableZoom zoom={1} autoRotate />
            </Canvas>
            <Desc> 
                This is my fully solo built React App 
            </Desc>
      </>
    );
}

export default WebDesign