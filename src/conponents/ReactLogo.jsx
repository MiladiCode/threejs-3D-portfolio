import { Float, useGLTF } from '@react-three/drei'

const ReactLogo = (props) => {
  const { nodes, materials } = useGLTF('/models/react_logo_circle.glb')
  return (
    <Float  floatIntensity={-2} floatingRange={[1,1]} rotationIntensity={0.5} f>
      <group rotation={[-Math.PI / 2, 0, -Math.PI / 2]} {...props}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh geometry={nodes['React-Logo_Material002_0'].geometry} material={materials['Material.002']} position={[0, 7.935, 0]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={[39.166, 39.166, 52.734]} />
          <mesh geometry={nodes.Backdrop_Material001_0.geometry} material={materials['Material.001']} position={[-17.091, 7.935, 0]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={[247.854, 247.854, 52.734]} />
        </group>
      </group>
    </Float>
  )
}

useGLTF.preload('/react_logo_circle.glb')
export default ReactLogo
