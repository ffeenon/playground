"use client";

import { OrbitControls, shaderMaterial } from "@react-three/drei";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import { useState } from "react";

import perlinFilterFs from "./shader/perlin-filter/.fs";
import perlinFilterVs from "./shader/perlin-filter/.vs";
import { useControls } from "leva";

function Experience() {
  const { size } = useControls({
    size: {
      value: 1,
      step: 0.1,
      min: 0.5,
      max: 3.0,
    },
  });
  const MyMaterial = shaderMaterial(
    { time: 0.0 },
    perlinFilterVs,
    perlinFilterFs,
  );

  extend({ MyMaterial });

  const [elapsedTime, setElapsedTime] = useState<number>();
  useFrame((state) => {
    setElapsedTime(state.clock.elapsedTime);
  });

  return (
    <mesh>
      <planeGeometry args={[size, size]} />
      {/*@ts-ignore*/}
      <myMaterial time={elapsedTime} />
    </mesh>
  );
}

export default function Home() {
  return (
    <Canvas>
      <OrbitControls />
      <axesHelper args={[10]} />
      <Experience />
    </Canvas>
  );
}
