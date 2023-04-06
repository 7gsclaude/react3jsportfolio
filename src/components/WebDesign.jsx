import React from 'react'
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";
import ReactLogo from "./ReactLogo";

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