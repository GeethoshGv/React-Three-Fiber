import React from "react";
import { Canvas } from "@react-three/fiber";
import { Carmodel } from "../Ex/Carmodel";

import {
  Center,
  AccumulativeShadows,
  RandomizedLight,
  Environment,
  OrbitControls,
} from "@react-three/drei";

const Exp = () => {
  return (
    <>
      <Canvas
        style={{ width: "100%", height: "100vh" }}
        camera={{ position: [4, 0, 6], fov: 35 }}
      >
        <group position={[0, -0.75, 0]}>
          <Center top>
            {" "}
            <Carmodel />{" "}
          </Center>
          <AccumulativeShadows>
            <RandomizedLight position={[2, 5, 5]} />
          </AccumulativeShadows>
        </group>
        <OrbitControls
          makeDefault
          minPolarAngle={0}
          maxPolarAngle={Math.PI / 2}
        />
        <Environment preset="dawn" background blur={1} />
      </Canvas>
    </>
  );
};

export default Exp;
