import { Suspense, useEffect, useState } from "react"
import { Canvas } from "@react-three/fiber"
import { useGLTF, OrbitControls, Preload } from "@react-three/drei"

import CanvasLoader from "./Loader"

const Computers = () => {
  const computer = useGLTF('./desktop_pc/scene.gltf')
  return (
    <div>Computers</div>
  )
}

export default Computers