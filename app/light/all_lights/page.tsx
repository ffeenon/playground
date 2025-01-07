"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import AmbientLightDebugger from "@/components/r3f/AmbientLightDebugger";
import HemisphereLightDebugger from "@/components/r3f/HemisphereLightDebugger";
import DirectionalLightDebugger from "@/components/r3f/DirectionalLightDebugger";
import PointLightDebugger from "@/components/r3f/PointLightDebugger";
import RectAreaLightDebugger from "@/components/r3f/RectAreaLightDebugger";
import SpotLightDebugger from "@/components/r3f/SpotLightDebugger";
import LightProbeDebugger from "@/components/r3f/LightProbeDebugger";

function Experience() {
  /**
   *  AmbientLight 和 HemisphereLight无法投射阴影，因为没有方向的概念
   *  RectAreaLight 不支持阴影
   * */
  return (
    <>
      <AmbientLightDebugger />
      <HemisphereLightDebugger />
      <DirectionalLightDebugger />
      <PointLightDebugger />
      <RectAreaLightDebugger />
      <SpotLightDebugger />
      <LightProbeDebugger />
      <mesh
        onPointerEnter={(e) => console.log("enter")}
        onPointerOut={(e) => console.log("out")}
      >
        <boxGeometry />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
    </>
  );
}

export default () => {
  return (
    <Canvas>
      <OrbitControls />
      <axesHelper args={[10]} />
      <Experience />
    </Canvas>
  );
};
