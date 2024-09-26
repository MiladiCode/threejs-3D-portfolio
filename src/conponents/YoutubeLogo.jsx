import { useGLTF } from '@react-three/drei';
import {useRef} from "react"; 
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const YoutubeLogo = ({...props}) => {
  const { nodes, materials } = useGLTF('/models/youtube_icon.glb');
  const targetRef = useRef();

  useGSAP (() => {
    gsap.to(targetRef.current.position, {
      y: targetRef.current.position.y + 1,
      duration: 2,
      repeat: -1,
      yoyo: true,
    })
  } )

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0.004]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}  ref={targetRef}>
          <mesh geometry={nodes.Cube_Material_0.geometry} material={materials.Material} rotation={[-Math.PI / 2, 0, 0]} scale={[100, 27.349, 71.573]}/>
          <mesh geometry={nodes.Circle_Material001_0.geometry} material={materials['Material.001']} position={[0, 0, 28.016]} rotation={[0, 0, -Math.PI / 2]} scale={[34.798, 34.798, 8.55]} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/youtube_icon.glb')

export default YoutubeLogo
