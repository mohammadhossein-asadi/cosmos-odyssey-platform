"use client";

import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { TravelRoute } from "../types";

interface TravelRouteVizProps {
  routes: TravelRoute[];
  galaxyPositions: Record<string, [number, number, number]>;
}

function TravelRouteViz({ routes, galaxyPositions }: TravelRouteVizProps) {
  const groupRef = useRef<THREE.Group>(null);

  useEffect(() => {
    if (!groupRef.current) return;

    while (groupRef.current.children.length > 0) {
      const child = groupRef.current.children[0];
      groupRef.current.remove(child);
      if (child instanceof THREE.Line) {
        child.geometry.dispose();
        (child.material as THREE.Material).dispose();
      }
    }

    for (const route of routes) {
      const from = galaxyPositions[route.from];
      const to = galaxyPositions[route.to];
      if (!from || !to) continue;

      const midPoint = [
        (from[0] + to[0]) / 2,
        (from[1] + to[1]) / 2 + 2,
        (from[2] + to[2]) / 2,
      ];

      const points = [
        new THREE.Vector3(...from),
        new THREE.Vector3(...midPoint as [number, number, number]),
        new THREE.Vector3(...to),
      ];

      const curve = new THREE.QuadraticBezierCurve3(points[0], points[1], points[2]);
      const linePoints = curve.getPoints(50);
      const geo = new THREE.BufferGeometry().setFromPoints(linePoints);
      const mat = new THREE.LineBasicMaterial({ color: "#00d4aa", transparent: true, opacity: 0.4 });
      groupRef.current.add(new THREE.Line(geo, mat));

      const markerGeo = new THREE.SphereGeometry(0.3, 16, 16);
      const markerMat = new THREE.MeshBasicMaterial({ color: "#00d4aa", transparent: true, opacity: 0.6 });
      const marker = new THREE.Mesh(markerGeo, markerMat);
      marker.position.set(...midPoint as [number, number, number]);
      groupRef.current.add(marker);
    }

    return () => {
      if (groupRef.current) {
        while (groupRef.current.children.length > 0) {
          const child = groupRef.current.children[0];
          groupRef.current.remove(child);
          if (child instanceof THREE.Line) {
            child.geometry.dispose();
            (child.material as THREE.Material).dispose();
          }
          if (child instanceof THREE.Mesh) {
            child.geometry.dispose();
            (child.material as THREE.Material).dispose();
          }
        }
      }
    };
  }, [routes, galaxyPositions]);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.children.forEach((child, i) => {
        if (child instanceof THREE.Mesh) {
          const phase = state.clock.elapsedTime * 2 + i;
          const scale = 0.5 + Math.sin(phase) * 0.3;
          child.scale.setScalar(scale);
        }
      });
    }
  });

  return <group ref={groupRef} />;
}

export { TravelRouteViz };
