import React from 'react'
import { PerspectiveCamera, RenderTexture, Text, } from '@react-three/drei';
import { useFrame } from 'react-three-fiber';
import { useRef } from 'react';

const Cube = () => {
    const textRef = useRef()
    
    useFrame(state=> (textRef.current.rotation.x = state.clock.elapsedTime) )
  return (
    <mesh>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial>
        <RenderTexture attach="map">
          <PerspectiveCamera makeDefault position={[0, 0, 2]} />
          <color attach="background" args={["pink"]} />
          <Text ref={textRef} fontSize={1} color="black">
            hello
          </Text>
        </RenderTexture>
      </meshStandardMaterial>
    </mesh>
  );
}

export default Cube