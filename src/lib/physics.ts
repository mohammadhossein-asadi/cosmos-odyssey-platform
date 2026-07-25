const G = 6.674e-11;

export function gravitationalForce(mass1: number, mass2: number, distance: number): number {
  return (G * mass1 * mass2) / (distance * distance);
}

export function escapeVelocity(mass: number, radius: number): number {
  return Math.sqrt((2 * G * mass) / radius);
}

export function orbitalPeriod(semiMajorAxis: number, centralMass: number): number {
  return 2 * Math.PI * Math.sqrt((semiMajorAxis ** 3) / (G * centralMass));
}

export function lightYearToKm(ly: number): number {
  return ly * 9.461e12;
}

export function auToKm(au: number): number {
  return au * 1.496e8;
}
