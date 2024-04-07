"use client"

import React, { useRef } from "react";
import { Text, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";



const TextLabel = ({ position, text }) => {
  return (
    <Text
      position={position}
      fontSize={0.6} 
      color="white" 
    >
      {text}
    </Text>
  );
};


export default function Earth(props) {
  const { nodes, materials } = useGLTF("/globe/earth.gltf");
  const earthRef = useRef();

  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y -= 0.002; 
    }
  });

  return (
    <group {...props} dispose={null}>
      <mesh
        ref={earthRef}
        geometry={nodes.Object_4.geometry}
        material={materials["Scene_-_Root"]}
        scale={3}
      >
        {/* Apply any additional transformations to the earth mesh if necessary */}
      </mesh>
      <TextLabel position={[1, 0, 0]} text="Africa" />
      <TextLabel position={[0, 1, 0]} text="Asia" />
      <TextLabel position={[0, 0, 1]} text="North America" />
      <TextLabel position={[0, -1, 0]} text="Europe" />
      <TextLabel position={[-1, 0, 0]} text="Australia" />
    </group>
  );
}

useGLTF.preload("/globe/earth.gltf");
