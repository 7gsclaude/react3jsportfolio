import React from 'react'
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";
import Reef from "./Reef";

function ReefKeeper() {
  return (
    <Canvas>
      <ambientLight intensity={1} />
      <Reef />
      
      <OrbitControls enableZoom zoom={1} autoRotate />
    </Canvas>
  );
}

export default ReefKeeper