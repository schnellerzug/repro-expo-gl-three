import React, { Suspense, useMemo } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { Canvas, useFrame } from '@react-three/fiber/native';
import * as THREE from 'three';

function SpinningBox() {
  const geometry = useMemo(() => new THREE.BoxGeometry(1, 1, 1), []);
  const material = useMemo(() => new THREE.MeshStandardMaterial({ color: 'hotpink' }), []);

  useFrame((state) => {
    const mesh = state.scene.getObjectByName('box') as THREE.Mesh | null;
    if (!mesh) return;
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.013;
  });

  return <mesh name="box" geometry={geometry} material={material} />;
}

export default function App() {
  // Helpful runtime info (shows up in logcat).
  console.log('[repro] three revision:', (THREE as any).REVISION);

  // Uncomment the next line to *intentionally* pull a second entry and see if you can
  // reproduce the "Multiple instances of Three.js" warning in your environment.
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  // const threeCjs = require('three/build/three.cjs'); console.log('[repro] three.cjs loaded:', !!threeCjs);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#111' }}>
      <View style={{ padding: 12 }}>
        <Text style={{ color: 'white', fontSize: 16, fontWeight: '600' }}>
          Expo GL + Three minimal scene
        </Text>
        <Text style={{ color: '#bbb', marginTop: 4 }}>
          If it crashes only in Release/Preview, build release APK and open.
        </Text>
      </View>

      <Canvas style={{ flex: 1 }} camera={{ position: [0, 0, 4], fov: 60 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[2, 2, 2]} intensity={1.0} />
        <Suspense fallback={null}>
          <SpinningBox />
        </Suspense>
      </Canvas>
    </SafeAreaView>
  );
}
