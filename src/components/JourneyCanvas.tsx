import { Float, Sparkles, useTexture } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { Suspense, useMemo, useRef } from 'react'
import * as THREE from 'three'
import type { Experience } from '../content/portfolio'

type JourneyCanvasProps = {
  experiences: Experience[]
  progress: number
  activeIndex: number
  onHover: (index: number | null) => void
  onOpen: (slug: string) => void
}

const assetUrl = (path: string) => new URL(path, document.baseURI).toString()

function CameraRig({ progress, count }: { progress: number; count: number }) {
  const target = useMemo(() => new THREE.Vector3(), [])
  const look = useMemo(() => new THREE.Vector3(), [])
  useFrame(({ camera }, delta) => {
    const point = progress * (count - 1)
    const lower = Math.floor(point)
    const mix = point - lower
    const sideA = lower % 2 ? 2.4 : 1.85
    const sideB = (lower + 1) % 2 ? 2.4 : 1.85
    const x = THREE.MathUtils.lerp(sideA, sideB, mix) * 0.43
    const z = -point * 8.7
    target.set(x, 0.8, z + 6.9)
    look.set(x, 0.05, z)
    const ease = 1 - Math.pow(0.001, delta)
    camera.position.lerp(target, ease)
    const currentLook = new THREE.Vector3(0, 0, -1).applyQuaternion(camera.quaternion).add(camera.position)
    currentLook.lerp(look, ease)
    camera.lookAt(currentLook)
  })
  return null
}

function Path({ count }: { count: number }) {
  const geometry = useMemo(() => {
    const points = Array.from({ length: count }, (_, index) => new THREE.Vector3(index % 2 ? 2.4 : 1.85, -2.85, -index * 8.7))
    const curve = new THREE.CatmullRomCurve3(points)
    return new THREE.TubeGeometry(curve, 160, 0.035, 8, false)
  }, [count])
  return (
    <mesh geometry={geometry}>
      <meshStandardMaterial color="#f0a85a" emissive="#f0a85a" emissiveIntensity={1.4} roughness={0.25} />
    </mesh>
  )
}

function SceneNode({ item, index, active, onHover, onOpen }: {
  item: Experience
  index: number
  active: boolean
  onHover: (index: number | null) => void
  onOpen: (slug: string) => void
}) {
  const group = useRef<THREE.Group>(null)
  const texture = useTexture(assetUrl(item.scene))
  texture.colorSpace = THREE.SRGBColorSpace
  const x = index % 2 ? 2.4 : 1.85
  useFrame((state, delta) => {
    if (!group.current) return
    const desiredScale = active ? 1.05 : 0.9
    const next = THREE.MathUtils.damp(group.current.scale.x, desiredScale, 4.5, delta)
    group.current.scale.setScalar(next)
    group.current.rotation.y = THREE.MathUtils.damp(group.current.rotation.y, (index % 2 ? -1 : 1) * 0.065 + Math.sin(state.clock.elapsedTime * 0.35 + index) * 0.012, 3, delta)
  })

  return (
    <group ref={group} position={[x, 0, -index * 8.7]}>
      <Float speed={1.15} rotationIntensity={0.05} floatIntensity={0.16}>
        <mesh
          onPointerEnter={(event) => { event.stopPropagation(); document.body.style.cursor = 'pointer'; onHover(index) }}
          onPointerLeave={() => { document.body.style.cursor = 'auto'; onHover(null) }}
          onClick={(event) => { event.stopPropagation(); onOpen(item.slug) }}
        >
          <planeGeometry args={[5.35, 5.35]} />
          <shaderMaterial
            uniforms={{ uTexture: { value: texture } }}
            vertexShader={`varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }`}
            fragmentShader={`uniform sampler2D uTexture; varying vec2 vUv; void main(){ vec4 tex=texture2D(uTexture,vUv); float edge=min(min(vUv.x,1.0-vUv.x),min(vUv.y,1.0-vUv.y)); float alpha=smoothstep(0.0,0.085,edge); gl_FragColor=vec4(tex.rgb,tex.a*alpha); }`}
            transparent
            depthWrite={false}
            toneMapped={false}
          />
        </mesh>
        <mesh
          position={[1.95, -1.45, 0.24]}
          onPointerEnter={(event) => { event.stopPropagation(); document.body.style.cursor = 'pointer'; onHover(index) }}
          onPointerLeave={() => { document.body.style.cursor = 'auto'; onHover(null) }}
          onClick={(event) => { event.stopPropagation(); onOpen(item.slug) }}
        >
          <torusGeometry args={[0.09, 0.018, 12, 32]} />
          <meshBasicMaterial color="#f0a85a" toneMapped={false} />
        </mesh>
      </Float>
    </group>
  )
}

function World(props: JourneyCanvasProps) {
  return (
    <>
      <color attach="background" args={['#07121f']} />
      <fog attach="fog" args={['#07121f', 7.5, 19]} />
      <ambientLight intensity={0.75} />
      <directionalLight color="#f0a85a" position={[4, 5, 5]} intensity={1.5} />
      <pointLight color="#8fb9c7" position={[-5, 1, 2]} intensity={18} distance={20} />
      <Sparkles count={130} scale={[18, 10, 65]} size={1.2} speed={0.18} color="#8fb9c7" opacity={0.35} />
      <Path count={props.experiences.length} />
      {props.experiences.map((item, index) => (
        <SceneNode
          key={item.slug}
          item={item}
          index={index}
          active={index === props.activeIndex}
          onHover={props.onHover}
          onOpen={props.onOpen}
        />
      ))}
      <CameraRig progress={props.progress} count={props.experiences.length} />
    </>
  )
}

export default function JourneyCanvas(props: JourneyCanvasProps) {
  return (
    <Canvas
      className="journey-canvas"
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: false, powerPreference: 'high-performance' }}
      camera={{ position: [0, 0.8, 6.9], fov: 43, near: 0.1, far: 100 }}
    >
      <Suspense fallback={null}><World {...props} /></Suspense>
    </Canvas>
  )
}
