import React from 'react'
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";
import Gamecube from "./Gamecube";



function GameDev() {
  return (
    <Canvas camera={{ fov: 25, position: [2, 2, 2] }}>
      <Gamecube />

      <OrbitControls enableZoom zoom={1} autoRotate />
    </Canvas>
  );
}

export default GameDev