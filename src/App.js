import React, { useRef, Suspense } from "react";
import { Canvas, useFrame, useLoader } from "react-three-fiber";
import "./App.css"

import { TextureLoader } from "three/src/loaders/TextureLoader.js";

function Box() {
  const mesh = useRef();
  useFrame(() => {
    mesh.current.rotation.y += 0.02;
  });

  const texture_1 = useLoader(TextureLoader, "textures/neptune_lolo.jpeg");

  return (
    <mesh ref={mesh}>
      <sphereGeometry attach="geometry" args={[3, 64, 64]} />
      <meshStandardMaterial map={texture_1} attachArray="material" />
    </mesh>
  );
}

// function Box2() {
//   const mesh = useRef();
//   useFrame(() => {
//     mesh.current.rotation.y += 0.01;
//   });

//   const texture_1 = useLoader(TextureLoader, "textures/2k_mercury.jpeg");

//   return (
//     <mesh ref={mesh}>
//       <sphereGeometry attach="geometry" args={[3, 64, 64]} />
//       <meshStandardMaterial map={texture_1} attachArray="material" />
//     </mesh>
//   );
// }

// function Box3() {
//   const mesh = useRef();
//   useFrame(() => {
//     mesh.current.rotation.y += 0.01;
//   });

//   const texture_1 = useLoader(TextureLoader, "textures/2k_earth_daymap.jpeg");

//   return (
//     <mesh ref={mesh}>
//       <sphereGeometry attach="geometry" args={[3, 64, 64]} />
//       <meshStandardMaterial map={texture_1} attachArray="material" />
//     </mesh>
//   );
// }

// function Box4() {
//   const mesh = useRef();
//   useFrame(() => {
//     mesh.current.rotation.y += 0.01;
//   });

//   const texture_1 = useLoader(TextureLoader, "textures/planetelolo.png");

//   return (
//     <mesh ref={mesh}>
//       <sphereGeometry attach="geometry" args={[3, 128, 128]} />
//       <meshStandardMaterial map={texture_1} attachArray="material" />
//     </mesh>
//   );
// }

export default function App() {
  return (
    <div className="grand">
      <Canvas colorManagement className="grand">
        <ambientLight intensity={0.5} />
        {/* <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} /> */}
        <pointLight position={[-10, -10, -10]} />
        <Suspense fallback={null}>
          <Box />
        </Suspense>
      </Canvas>
    </div>
  );
}
