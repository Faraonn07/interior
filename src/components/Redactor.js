import React from 'react'
import {SocketManager} from "./SocketManager";
import {Canvas} from "@react-three/fiber";
import {ScrollControls} from "@react-three/drei";
import {Experience} from "./Experience";
import {shopModeAtom, UI} from "./UI";
import {useAtom} from "jotai";

const Redactor = () => {
  const [shopMode] = useAtom(shopModeAtom);
  return (
      <div style={{
        top: -30,
        width: "98vw",
        height: "85vh",
        position: "relative",
      }}>
        <SocketManager/>
        <Canvas shadows camera={{position: [8, 8, 8], fov: 30}}>
          <color attach="background" args={["#ececec"]}/>
          <ScrollControls pages={shopMode ? 4 : 0}>
            <Experience/>
          </ScrollControls>
        </Canvas>
        <UI/>
      </div>
  )
}


export default Redactor
