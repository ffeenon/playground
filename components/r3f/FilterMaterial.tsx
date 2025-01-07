"use client";

import { shaderMaterial } from "@react-three/drei";
import vertexShader from "@/shader/basic-filter/vertex.glsl";
import fragmentShader from "@/shader/basic-filter/fragment.glsl";
import * as THREE from "three";
import { extend } from "@react-three/fiber";

const CustomFilterMaterial = shaderMaterial(
  {
    uFilter: 0.0,
    uBaseTexture: new THREE.Texture(),
    uFilterTexture: new THREE.Texture(),
    transparent: true,
  },
  vertexShader,
  fragmentShader,
);

extend({ CustomFilterMaterial });

export default ({
  filter,
  baseTexture,
  filterTexture,
}: {
  filter: number;
  baseTexture: THREE.Texture;
  filterTexture: THREE.Texture;
}) => {
  return (
    // @ts-ignore
    <customFilterMaterial
      uFilter={filter}
      uBaseTexture={baseTexture}
      uFilterTexture={filterTexture}
    />
  );
};
