import { checkWebGL } from "@/lib/utils";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState, useEffect } from "react";
import * as THREE from "three";

const loadIconsPaths = async () => {
  const response = await fetch("/icons-paths.json");
  return await response.json() as string[];
};

type Icon = { pos: THREE.Vector3; velocity: THREE.Vector3; life: number; opacity: number; scale: number; maxScale: number; path: string; };

const Icons = () => {
  const particles = useRef<THREE.Mesh[]>([]);
  const [icons, setIcons] = useState<Icon[]>([]);
  const [lastCursorPosition, setLastCursorPosition] = useState({ x: 0, y: 0 });
  const [iconsPaths, setIconsPaths] = useState<string[]>([]);
  const [lastUpdate, setLastUpdate] = useState(0);

  useEffect(() => {
    loadIconsPaths().then((data) => {
      setIconsPaths(data);
    });
  }, []);

  const createIcon = (pointer: THREE.Vector2) => {
    const dotCount = 5;

    const newIcons = Array.from({ length: dotCount }, () => {
      const deviation = new THREE.Vector3(
        (Math.random() - 0.5) * 0.1,
        (Math.random() - 0.5) * 0.1,
        0
      );

      const initialVelocity = new THREE.Vector3(
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02,
        0
      );

      const path = iconsPaths[Math.floor(Math.random() * iconsPaths.length)];

      return {
        pos: new THREE.Vector3(pointer.x, pointer.y, 0).add(deviation),
        velocity: initialVelocity,
        life: 300,
        opacity: 1,
        scale: 0.15,
        maxScale: 0.25,
        path,
      };
    });

    setIcons((icons) => [...icons, ...newIcons]);
  };

  useFrame(({ pointer, viewport }) => {
    const cursorX = (pointer.x * viewport.width) / 2;
    const cursorY = (pointer.y * viewport.height) / 2;

    const cursorMoved =
      cursorX !== lastCursorPosition.x || cursorY !== lastCursorPosition.y;

    const newPointer = new THREE.Vector2(
      (pointer.x * viewport.width) / 2,
      (pointer.y * viewport.height) / 2
    );

    const now = Date.now();
    const timeSinceLastUpdate = now - lastUpdate;

    const isCursorInWorkingArea = cursorY < 2 && cursorX > -2.8 && cursorX < 2.8;
    
    if (cursorMoved && timeSinceLastUpdate > 100 && isCursorInWorkingArea ) {
      setLastUpdate(now);
      setLastCursorPosition(newPointer);
      createIcon(newPointer);
    }

    setIcons((prev) =>
      prev
        .map((p) => {
          p.pos.add(p.velocity);
          p.velocity.multiplyScalar(0.98);
          p.opacity -= 0.014;
          p.life -= 2;

          if (p.scale < p.maxScale) {
            p.scale += 0.001;
          }

          return p;
        })
        .filter((p) => p.life > 0 && p.opacity > 0)
    );

    particles.current.forEach((mesh, i) => {
      if (icons[i]) {
        mesh.position.copy(icons[i].pos);
        mesh.scale.set(icons[i].scale, icons[i].scale, 1);
        (mesh.material as THREE.Material).opacity = icons[i].opacity;
      }
    });
  });

  return (
    <>
      {icons.map((_, i) => (
        <mesh key={i} ref={(el) => (particles.current[i] = el as THREE.Mesh)}>
          <planeGeometry args={[1, 1]} />
          <meshBasicMaterial
            map={
              iconsPaths.length > 0
                ? new THREE.TextureLoader().load(icons[i].path)
                : null
            }
            transparent={true}
            opacity={icons[i].opacity}
          />
        </mesh>
      ))}
    </>
  );
};

const AnimatedCursorSection = () => {
  const [webGLSupported, setWebGLSupported] = useState(false);

  useEffect(() => {
    setWebGLSupported(checkWebGL());
  }, []);

  return webGLSupported &&
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <Icons />
    </Canvas>
};

export default AnimatedCursorSection;
