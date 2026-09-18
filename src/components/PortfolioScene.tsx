import { Environment, Float, Lightformer } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { createElement as h, useRef } from "react";
import * as THREE from "three";

// NOTE: this file intentionally avoids JSX. The dev-time source tagger injects a
// `data-tsd-source` attribute into every JSX element, and react-three-fiber throws
// when such a prop reaches a three.js object ("Cannot set \"data-tsd-source\"").

function Monolith() {
  const group = useRef<THREE.Group>(null);

  useFrame((state, rawDelta) => {
    const object = group.current;
    if (!object) return;
    const delta = Math.min(rawDelta, 0.05);
    object.rotation.y += delta * 0.06;
    object.rotation.x = THREE.MathUtils.lerp(
      object.rotation.x,
      state.pointer.y * 0.1,
      1 - Math.exp(-2.4 * delta),
    );
    object.rotation.z = THREE.MathUtils.lerp(
      object.rotation.z,
      -state.pointer.x * 0.08,
      1 - Math.exp(-2.4 * delta),
    );
  });

  return h(
    Float,
    { speed: 0.7, rotationIntensity: 0.12, floatIntensity: 0.25 },
    h(
      "group",
      { ref: group, rotation: [0.08, -0.4, 0.04] },
      // Faceted core — a clean cut-gem form
      h(
        "mesh",
        { castShadow: true },
        h("octahedronGeometry", { args: [2.4, 0] }),
        h("meshPhysicalMaterial", {
          color: "#d8c39c",
          roughness: 0.28,
          metalness: 0.82,
          clearcoat: 0.6,
          clearcoatRoughness: 0.22,
          flatShading: true,
        }),
      ),
      // Thin wireframe edge highlight
      h(
        "mesh",
        { scale: 1.012 },
        h("octahedronGeometry", { args: [2.4, 0] }),
        h("meshBasicMaterial", {
          color: "#f4e7c8",
          wireframe: true,
          transparent: true,
          opacity: 0.22,
        }),
      ),
      // Inner accent
      h(
        "mesh",
        { scale: 0.42, rotation: [0.6, 0.8, 0.2] },
        h("icosahedronGeometry", { args: [1.4, 0] }),
        h("meshPhysicalMaterial", {
          color: "#1d3d39",
          roughness: 0.2,
          metalness: 0.7,
          clearcoat: 0.85,
          flatShading: true,
        }),
      ),
    ),
  );
}

function Scene() {
  return h(
    "group",
    null,
    h("ambientLight", { intensity: 0.7 }),
    h("spotLight", {
      position: [5, 7, 6],
      intensity: 32,
      angle: 0.42,
      penumbra: 0.85,
      color: "#f2d399",
    }),
    h("pointLight", { position: [-5, -1, 3], intensity: 10, color: "#457d72" }),
    h(Monolith, null),
    h(
      Environment,
      { resolution: 64 },
      h(Lightformer, { intensity: 3, position: [0, 5, 2], scale: [10, 2, 1] }),
      h(Lightformer, {
        intensity: 2,
        color: "#d8b875",
        position: [-5, 1, 1],
        rotation: [0, Math.PI / 2, 0],
        scale: [8, 1, 1],
      }),
    ),
  );
}

export function PortfolioScene() {
  return h(
    "div",
    { className: "absolute inset-0", "aria-hidden": "true" },
    h(
      Canvas,
      {
        dpr: [1, 1.5],
        camera: { position: [0, 0, 8.4], fov: 42 },
        gl: { antialias: true, alpha: true },
      },
      h(Scene, null),
    ),
  );
}
