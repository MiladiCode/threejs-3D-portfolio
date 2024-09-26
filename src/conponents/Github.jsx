import { useGLTF } from '@react-three/drei';
import {useRef} from "react"; 
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Github = ({...props}) => {
  const { nodes, materials } = useGLTF('/models/3d_github_logo.glb');
  const targetRef = useRef();

  useGSAP (() => {
    gsap.to(targetRef.current.position, {
      y: targetRef.current.position.y + 1,
      duration: 2,
      repeat: -1,
      yoyo: true,
    })
  })

  return (
    <group {...props} dispose={null}>
      <group position={[-0.055, 2.945, 6.336]} rotation={[Math.PI / 2, 0, 0]} scale={28.364}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}  ref={targetRef}>
          <mesh geometry={nodes.Object_4.geometry} material={materials.glossy_putih} />
          <mesh geometry={nodes.Object_5.geometry} material={materials.github} />
          </group>
      </group>
    </group>
  )
}

useGLTF.preload('/3d_github_logo.glb')

export default Github