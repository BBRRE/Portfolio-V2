import React from 'react'

const Scene = () => {
    return (
      <div className="w-full h-screen">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <Suspense fallback={
            <mesh>
              <boxGeometry args={[1, 1, 1]} />
              <meshStandardMaterial color="gray" />
            </mesh>
          }>
            <Model />
            <OrbitControls />
          </Suspense>
        </Canvas>
      </div>
    );
  };
  
  export default Scene;