import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

const Scene = () => {
  return (
    <>

    <EffectComposer>
      <Bloom mipmapBlur/>
    </EffectComposer>
    <OrbitControls/>
    <color args={["black"]} attach="background"/>
    <mesh>
      <boxGeometry/>
      <meshBasicMaterial color={[1.5, 1, 4]} toneMapped={false}/>
    </mesh>
    <mesh position={[3,0,0]}>
      <icosahedronGeometry/>
      <meshBasicMaterial color={[4.5, 1, 0]} toneMapped={false}/>
    </mesh>
    </>
  )
}

function App() {
  return (
      <Canvas>
        <Scene/>
      </Canvas>
  );
}

export default App;
