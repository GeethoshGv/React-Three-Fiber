import "./App.css";
import { Canvas } from "@react-three/fiber";
import Car from "./components/Car";
import { ScrollControls, Scroll } from "@react-three/drei";
import {
  HomeSection,
  FirstSection,
  SecondSection,
  ThirdSection,
  FourthSection,
  FifthSection,
  SixthSection,
  SeventhSection,
  LastCompo,
  Aero,
  Footer,
} from "./components/indexcomp";

import { GlobalStyle } from "./styled/styled";

function App() {
  return (
    <Canvas
      style={{ width: "100%", height: "100vh" }}
      camera={{
        fov: 60,
      }}
      shadows={false}
    >
      <color attach={"background"} args={["#212529"]} />
      <ambientLight intensity={0.5} />
      <ScrollControls pages={14} damping={0.1}>
        <Car />
        <Scroll></Scroll>
        <Scroll html style={{ width: "100%" }}>
          <GlobalStyle />
          <HomeSection />
          <FirstSection />
          <SecondSection />
          <ThirdSection />
          <FourthSection />
          <FifthSection />
          <SixthSection />
          <SeventhSection />
          <LastCompo />
          <Aero />
          <Footer />
        </Scroll>
      </ScrollControls>
      ;
    </Canvas>
  );
}

export default App;
