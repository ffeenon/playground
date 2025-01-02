'use client'

import {Canvas} from "@react-three/fiber";
import {OrbitControls, useTexture} from "@react-three/drei";
import {useControls} from "leva";
import FilterMaterial from "@/component/r3f/FilterMaterial";

function Experience() {
  const { size, filter } = useControls({
    size: {
      value: 1,
      step: 0.1,
      min: 0.5,
      max: 3.0,
    },
    filter: {
      value: 0,
      step: 0.01,
      min: 0.0,
      max: 1.0,
    },
  });

  const [perlinTexture, treeRootTexture] = useTexture([
    "texture/perlin.jpg",
    "texture/tree_root.png",
  ]);

  return (
    <mesh>
      <planeGeometry args={[size, size]} />
      <FilterMaterial filter={filter} baseTexture={treeRootTexture} filterTexture={perlinTexture} />
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