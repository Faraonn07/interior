import React, { useMemo, useState, useEffect, useRef } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame, useGraph } from "@react-three/fiber";
import { useAtom } from "jotai";
import { SkeletonUtils } from "three-stdlib";
import { useGrid } from "../hooks/useGrid";
import { userAtom } from "./SocketManager";

const MOVEMENT_SPEED = 0.032;
const ROTATION_SPEED = 0.002;

export function AnimatedWoman({
  hairColor = "green",
  topColor = "pink",
  bottomColor = "brown",
  id,
  ...props
}) {
  const position = useMemo(() => props.position, []);
  const [path, setPath] = useState();
  const { gridToVector3 } = useGrid();

  useEffect(() => {
    const path = [];
    props.path?.forEach((gridPosition) => {
      path.push(gridToVector3(gridPosition));
    });
    setPath(path);
  }, [props.path]);

  const group = useRef();
  const { scene, materials, animations } = useGLTF(
    "/models/Animated Woman.glb"
  );
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes } = useGraph(clone);

  const { actions } = useAnimations(animations, group);
  const [animation, setAnimation] = useState("CharacterArmature|Idle");

  useEffect(() => {
    actions[animation].reset().fadeIn(0.32).play();
    return () => actions[animation]?.fadeOut(0.32);
  }, [animation]);

  const [user] = useAtom(userAtom);

  const cameraRef = useRef();
  useFrame((state) => {
    if (path?.length && group.current.position.distanceTo(path[0]) > 0.1) {
      const direction = group.current.position
        .clone()
        .sub(path[0])
        .normalize()
        .multiplyScalar(MOVEMENT_SPEED);
      group.current.position.sub(direction);
      group.current.lookAt(path[0]);
      setAnimation("CharacterArmature|Run");
    } else if (path?.length) {
      path.shift();
    } else {
      setAnimation("CharacterArmature|Idle");
    }

    if (id === user) {
      const camera = cameraRef.current;
      const angle = ROTATION_SPEED * state.clock.getDelta();
      const x = camera.position.x - group.current.position.x;
      const z = camera.position.z - group.current.position.z;
      camera.position.x = group.current.position.x + x * Math.cos(angle) - z * Math.sin(angle);
      camera.position.z = group.current.position.z + x * Math.sin(angle) + z * Math.cos(angle);
      camera.lookAt(group.current.position);
    }
  });

  return (
    <group
      ref={group}
      {...props}
      position={position}
      dispose={null}
      name={`character-${id}`}
    >
      <group name="Root_Scene">
        <group name="RootNode">
          <group
            name="CharacterArmature"
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <primitive object={nodes.Root} />
          </group>
          {/* остальной код без изменений */}
        </group>
      </group>
      <perspectiveCamera
        ref={cameraRef}
        args={[75, window.innerWidth / window.innerHeight, 0.1, 1000]}
      />
    </group>
  );
}

useGLTF.preload("/models/Animated Woman.glb");
