"use client";

import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, Text } from "@react-three/drei";
import Earth from "@/components/landing/Earth";

const Earth3D = () => {
  const continents = [
    "Asia And The Pacific",
    "Middle East",
    "Africa",
    "Europe",
    "North America",
    "Latin America And The Caribbean",
  ];
  const [currentContinentIndex, setCurrentContinentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentContinentIndex(
        (prevIndex) => (prevIndex + 1) % continents.length
      );
    }, 2000); // Change continent every 2 seconds

    return () => clearInterval(interval);
  }, [continents.length]);

  return (
    <>
    <div className="mx-auto flex items-center justify-center mt-6">
        {continents.map((continent, index) => (
          <div
            key={index}
            style={{
              display: index === currentContinentIndex ? "block" : "none",
              marginBottom: 10,
            }}
            className="sm:text-3xl text-2xl font-bold font-mono break-all"
          >
            {continent}
          </div>
        ))}
      </div>
      <Canvas shadows className="mt-8">
        <ambientLight />
        <directionalLight />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls enableZoom={false} />
        <Suspense fallback={null}>
          <Earth />
        </Suspense>
        <Environment preset="sunset" />
      </Canvas>
      
    </>
  );
};

export default Earth3D;
