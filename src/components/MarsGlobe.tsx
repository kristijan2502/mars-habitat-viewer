import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Billboard, Environment, Lightformer, OrbitControls, useTexture, Stars } from "@react-three/drei";
import * as THREE from "three";
import marsMap from "@/assets/mars-surface.jpg.asset.json";
import { habitats, type Habitat } from "@/lib/habitats";
import { isMarkerVisible, MARKER_RADIUS } from "@/lib/marker-visibility";

type MarsGlobeProps = {
  mode: "habitats" | "explore";
  activeId?: string | null;
  onSelect?: (habitat: Habitat) => void;
};

function Marker({ habitat, active, onSelect }: { habitat: Habitat; active: boolean; onSelect: (habitat: Habitat) => void }) {
  const radius = MARKER_RADIUS;
  const x = Math.sin(habitat.lon) * Math.cos(habitat.lat) * radius;
  const y = Math.sin(habitat.lat) * radius;
  const z = Math.cos(habitat.lon) * Math.cos(habitat.lat) * radius;
  const ruby = useRef<THREE.Group>(null);
  const marker = useRef<THREE.Group>(null);
  const vectors = useMemo(() => ({ anchor: new THREE.Vector3(), center: new THREE.Vector3(), normal: new THREE.Vector3(), camera: new THREE.Vector3() }), []);
  const rubyColor = useMemo(() => getComputedStyle(document.documentElement).getPropertyValue("--habitat-ruby").trim(), []);
  const gemGeometry = useMemo(() => {
    const positions: number[] = [];
    const colors: number[] = [];
    const base = new THREE.Color(rubyColor);
    const ring = (radius: number, depth: number) => Array.from({ length: 8 }, (_, i) => {
      const angle = Math.PI / 8 + i * Math.PI / 4;
      return [Math.cos(angle) * radius, Math.sin(angle) * radius * 0.85, depth];
    });
    const outer = ring(0.095, 0);
    const table = ring(0.055, 0.028);
    const triangle = (a: number[], b: number[], c: number[], shade: number) => {
      positions.push(...a, ...b, ...c);
      const color = base.clone().multiplyScalar(shade);
      for (let i = 0; i < 3; i++) colors.push(color.r, color.g, color.b);
    };
    for (let i = 0; i < 8; i++) {
      const next = (i + 1) % 8;
      triangle([0, 0, 0.028], table[i], table[next], 0.7);
      triangle(table[i], outer[i], outer[next], i % 2 === 0 ? 0.95 : 0.42);
      triangle(table[i], outer[next], table[next], i % 2 === 0 ? 0.58 : 0.85);
      triangle(outer[next], outer[i], [0, 0, -0.035], 0.35);
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
    geometry.computeVertexNormals();
    return geometry;
  }, [rubyColor]);
  const dotColor = useMemo(() => getComputedStyle(document.documentElement).getPropertyValue("--habitat-anchor").trim(), []);
  const BASE = 1.25;
  useFrame((state) => {
    if (!ruby.current || !marker.current) return;
    marker.current.getWorldPosition(vectors.anchor);
    marker.current.parent?.getWorldPosition(vectors.center);
    vectors.normal.copy(vectors.anchor).sub(vectors.center).normalize();
    state.camera.getWorldPosition(vectors.camera).sub(vectors.center);
    marker.current.visible = isMarkerVisible(vectors.normal, vectors.camera);
    const pulse = active ? BASE * (1 + 0.04 * Math.sin(state.clock.elapsedTime * 3.4)) : BASE;
    ruby.current.scale.setScalar(pulse);
  });
  const handleClick = (event: { stopPropagation: () => void }) => { event.stopPropagation(); onSelect(habitat); };
  return (
    <group ref={marker} position={[x, y, z]}>
      <Billboard>
        <group ref={ruby} position={[0, 0.13, 0]}>
          {/* faceted ruby body */}
          <mesh
            geometry={gemGeometry}
            onClick={handleClick}
            onPointerOver={(event) => { event.stopPropagation(); document.body.style.cursor = "pointer"; }}
            onPointerOut={() => { document.body.style.cursor = ""; }}
          >
            <meshPhysicalMaterial
              vertexColors
              roughness={0.18}
              metalness={0}
              clearcoat={0.85}
              clearcoatRoughness={0.12}
              ior={1.76}
              emissive={rubyColor}
              emissiveIntensity={0.12}
              toneMapped={false}
              flatShading
            />
          </mesh>
        </group>
        {/* white anchor dot marking the exact habitat location */}
        <mesh
          onClick={handleClick}
          onPointerOver={(event) => { event.stopPropagation(); document.body.style.cursor = "pointer"; }}
          onPointerOut={() => { document.body.style.cursor = ""; }}
        >
          <circleGeometry args={[0.024, 24]} />
          <meshBasicMaterial color={dotColor} toneMapped={false} />
        </mesh>
      </Billboard>
    </group>
  );
}

function Planet({ mode, activeId, onSelect }: MarsGlobeProps) {
  const texture = useTexture(marsMap.url);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 8;
  const group = useRef<THREE.Group>(null);

  useFrame((_, rawDelta) => {
    if (mode !== "habitats" || !activeId || !group.current) return;
    const active = habitats.find((habitat) => habitat.id === activeId);
    if (!active) return;
    const target = -active.lon;
    const current = group.current.rotation.y;
    const diff = Math.atan2(Math.sin(target - current), Math.cos(target - current));
    group.current.rotation.y += diff * (1 - Math.exp(-2.3 * Math.min(rawDelta, 0.05)));
  });

  return (
    <group ref={group} rotation={[0, mode === "habitats" ? 0 : 0.5, 0]}>
      <mesh>
        <sphereGeometry args={[2, 96, 64]} />
        <meshStandardMaterial map={texture} roughness={1} metalness={0} />
      </mesh>
      <mesh>
        <sphereGeometry args={[2.022, 64, 48]} />
        <meshBasicMaterial color="#b57250" transparent opacity={0.055} blending={THREE.AdditiveBlending} depthWrite={false} />
      </mesh>
      {mode === "habitats" && onSelect && habitats.map((habitat) => (
        <Marker key={habitat.id} habitat={habitat} active={activeId === habitat.id} onSelect={onSelect} />
      ))}
    </group>
  );
}

export function MarsGlobe(props: MarsGlobeProps) {
  return (
    <Canvas camera={{ position: [0, 0, 6.3], fov: 44 }} dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }}>
      <ambientLight intensity={1.05} />
      <directionalLight position={[5, 3, 5]} intensity={2.7} color="#fff0d9" />
      <pointLight position={[-5, -2, -3]} intensity={1.3} color="#b57657" />
      <Environment>
        <Lightformer intensity={1.5} position={[0, 5, 0]} scale={[10, 10, 1]} />
      </Environment>
      <Stars radius={70} depth={35} count={900} factor={2} saturation={0} fade speed={0} />
      <Suspense fallback={null}>
        <Planet {...props} />
      </Suspense>
      <OrbitControls enablePan={false} minDistance={3.4} maxDistance={9} minPolarAngle={0.18} maxPolarAngle={Math.PI - 0.18} enableDamping dampingFactor={0.07} rotateSpeed={0.6} />
    </Canvas>
  );
}