import React from 'react'
import { easing } from 'maath'
import { useSnapshot } from 'valtio'
import { useFrame } from '@react-three/fiber'
import { Decal , useGLTF , useTexture } from '@react-three/drei'
import state from '../store'

const Shirt = () => {
  const snap = useSnapshot(state)
  const { nodes, materials } = useGLTF('/shirt_baked.glb')
  const logoTexture = useTexture(snap.logoDecal)
  const fullTexture = useTexture(snap.fullDecal)
  const stateString = JSON.stringify(snap);
  let Position = snap.decalPosition * 0.01
  return (
    <group key = 'stateString'>
      <mesh
      castShadow
      geometry={nodes.T_Shirt_male.geometry}
      material={materials.lambert1}
      material-roughness={1}
      dispose={null}

      >
        {snap.isLogoTexture && (
          <Decal
            position={[0, Position , 0.15]}
            rotation={[0, 0, 0]}
            scale={snap.decalSize * 0.01}
            map={logoTexture}
            mapAnisotropy={16}
            depthTest={false}
            depthWrite={true}
          />
            )}

      </mesh>
    </group>
  )
}

export default Shirt;
