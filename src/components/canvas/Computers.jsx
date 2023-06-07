/* eslint-disable react/no-unknown-property */
import { Suspense, useEffect, useState } from "react"
import { Canvas } from "@react-three/fiber"
import { useGLTF, OrbitControls, Preload } from "@react-three/drei"

import CanvasLoader from "./Loader"

const Computers = () => {
  const computer = useGLTF('./desktop_pc/scene.gltf')
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black"/>
      <pointLight intensity={1}/>
      <primitive object={computer.scene}/>
      
    </mesh>
  )
}

export default Computers