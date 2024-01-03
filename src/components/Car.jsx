import { Stage } from "@react-three/drei";
import React, { Suspense } from "react";
import { Modelzoro } from "./Modelzoro";
import {
  Center,
  AccumulativeShadows,
  RandomizedLight,
  Environment,
  OrbitControls,
} from "@react-three/drei";

const Car = () => {
  return (
    <>
      <group position={[0, -0.35, -0.55]}>
        {" "}
        {/*   0, -0.75, 0 */}
        <Center top>
          <Modelzoro />
        </Center>
        <AccumulativeShadows>
          <RandomizedLight position={[2, 5, 5]} />
        </AccumulativeShadows>
      </group>

      <Environment preset="studio" attach={"background"} args={["#212529"]} />
    </>
  );
};
export default Car;
