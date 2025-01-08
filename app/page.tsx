"use client";

import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls, Text3D } from "@react-three/drei";
import font from "@/assets/fonts/gentilis_bold.typeface.json"
function Experience() {
  return (
    <Center>
      <Text3D font={font as any} size={0.7}>
        Result-oriented
        <meshNormalMaterial />
      </Text3D>
    </Center>
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
