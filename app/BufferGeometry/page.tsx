"use client";

import useConcept from "@/hook/useConcept";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useControls } from "leva";
import { useMemo } from "react";

function Experience() {
  const { representation } = useControls({
    representation: {
      options: { mesh: 0, line: 1, points: 2 },
    },
  });

  const position = useMemo(
    () => new Float32Array([0.2, 0, 0.5, 1, 0, 0.5, 0.7, 1, 0.5]),
    [],
  );

  const geometry = useMemo(() => {
    return (
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={position}
          count={position.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
    );
  }, [position]);
  return (
    <>
      {representation === 0 && (
        <mesh>
          {geometry}
          <meshBasicMaterial color="cyan" />
        </mesh>
      )}
      {representation === 1 && (
        <line>
          {geometry}
          <lineBasicMaterial color="cyan" />
        </line>
      )}
      {representation === 2 && (
        <points>
          {geometry}
          <pointsMaterial color="cyan" />
        </points>
      )}
    </>
  );
}

export default () => {
  useConcept("使用BufferGeometry定义");
  return (
    <Canvas camera={{ position: [1, 1.5, 5] }}>
      <OrbitControls />
      <axesHelper args={[10]} />
      <Experience />
    </Canvas>
  );
};
