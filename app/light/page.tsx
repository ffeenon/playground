"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useControls } from "leva";

function Experience() {
  /**
   *  AmbientLight 和 HemisphereLight无法投射阴影，因为没有方向的概念
   *  RectAreaLight 不支持阴影
   * */
  const ambientLight = useControls("ambient light", {
    enabled: {
      value: true,
    },
    intensity: {
      value: 1,
      step: 0.1,
      min: 0,
      max: 10,
    },
    color: "#ffffff",
  });
  const hemisphereLight = useControls("hemisphere light", {
    enabled: {
      value: true,
    },
    color: "#ffffff",
    groundColor: "#ffffff",
    intensity: {
      value: 1,
      step: 0.1,
      min: 0,
      max: 10,
    },
  });
  const directionalLight = useControls("directional light", {
    enabled: {
      value: true,
    },
    color: "#ffffff",
    intensity: {
      value: 1,
      step: 0.1,
      min: 0,
      max: 10,
    },
    position: [0, 0, 1],
    castShadow: false,
  });

  const pointLight = useControls("point light", {
    enabled: {
      value: true,
    },
    color: "#ffffff",
    intensity: 1,
    distance: {
      value: 0,
      step: 0.1,
      min: 0,
      max: 10,
    },
    decay: {
      value: 2,
      step: 0.1,
      min: 0,
      max: 10,
    },
    position: [0, 0, 1],
  });

  const rectAreaLight = useControls("rect area light", {
    enabled: {
      value: true,
    },
    color: "#ffffff",
    intensity: 1,
    width: 1,
    height: 1,
    position: [0, 0, 1],
    rotation: [0, 0, 0],
  });

  const spotLight = useControls("spot light", {
    enabled: {
      value: true,
    },
    color: "#ffffff",
    intensity: {
      value: 1,
      min: 0,
      max: 10,
      step: 0.01,
    },
    distance: {
      value: 0, // 0 no limit
      min: 0,
      max: 100,
      step: 0.1,
    },
    angle: {
      value: Math.PI / 3,
      min: 0,
      max: Math.PI / 2,
      step: 0.01,
    },
    penumbra: {
      value:0,
      min:0,
      max:1,
      step:0.01
    },
    decay: {
      value: 2,
      min: 0,
      max: 10,
      step: 0.01,
    },
    position: [0, 0, 1],
  });

  const lightProbe = useControls("light probe", {
    enabled: {
      value: true,
    },
    intensity: {
      value: 1,
      min: 0,
      max: 10,
      step: 0.01,
    },
  });
  return (
    <>
      {ambientLight.enabled && <ambientLight {...ambientLight} />}
      {hemisphereLight.enabled && <hemisphereLight {...hemisphereLight} />}
      {directionalLight.enabled && <directionalLight {...directionalLight} />}
      {pointLight.enabled && <pointLight {...pointLight} />}
      {rectAreaLight.enabled && <rectAreaLight {...rectAreaLight} />}
      {spotLight.enabled && <spotLight {...spotLight} />}
      {lightProbe.enabled && <lightProbe {...lightProbe} />}
      <mesh>
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
