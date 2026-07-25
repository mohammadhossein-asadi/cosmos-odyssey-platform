"use client";

import { Ring } from "./Ring";

function SaturnRings() {
  return (
    <group rotation={[-Math.PI / 2.5, 0, 0]}>
      <Ring innerRadius={1.3} outerRadius={2.0} color="#c4a060" opacity={0.4} />
      <Ring innerRadius={2.1} outerRadius={2.4} color="#d4b070" opacity={0.3} />
      <Ring innerRadius={2.5} outerRadius={2.8} color="#b09050" opacity={0.2} />
    </group>
  );
}

export { SaturnRings };
