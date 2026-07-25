import { SkyStar } from "../types";

export const skyStars: SkyStar[] = [
  // Winter stars
  { id: "rigel", name: "Rigel", x: 0.55, y: 0.3, magnitude: 0.13, color: "#aaccff", spectralClass: "B8Ia", constellation: "Orion", description: "Blue supergiant, brightest in Orion." },
  { id: "betelgeuse", name: "Betelgeuse", x: 0.45, y: 0.25, magnitude: 0.5, color: "#ff6347", spectralClass: "M1-2", constellation: "Orion", description: "Red supergiant, one of the largest visible stars." },
  { id: "sirius", name: "Sirius", x: 0.5, y: 0.55, magnitude: -1.46, color: "#aaccff", spectralClass: "A1V", constellation: "Canis Major", description: "The brightest star in the night sky." },
  { id: "procyon", name: "Procyon", x: 0.4, y: 0.5, magnitude: 0.34, color: "#fff4e0", spectralClass: "F5IV", constellation: "Canis Minor", description: "Eighth brightest star, binary system." },
  { id: "aldebaran", name: "Aldebaran", x: 0.35, y: 0.3, magnitude: 0.86, color: "#ffa500", spectralClass: "K5III", constellation: "Taurus", description: "Orange giant, eye of the bull." },
  { id: "capella", name: "Capella", x: 0.4, y: 0.15, magnitude: 0.08, color: "#ffd93d", spectralClass: "G8III", constellation: "Auriga", description: "Sixth brightest star, quadruple system." },
  { id: "pollux", name: "Pollux", x: 0.38, y: 0.35, magnitude: 1.14, color: "#ffa500", spectralClass: "K0III", constellation: "Gemini", description: "Orange giant, closest giant to Sun." },
  { id: "castor", name: "Castor", x: 0.37, y: 0.32, magnitude: 1.58, color: "#aaccff", spectralClass: "A1V", constellation: "Gemini", description: "Sextuple star system." },

  // Spring stars
  { id: "arcturus", name: "Arcturus", x: 0.6, y: 0.4, magnitude: -0.05, color: "#ffa500", spectralClass: "K1.5III", constellation: "Boötes", description: "Brightest in northern hemisphere." },
  { id: "spica", name: "Spica", x: 0.55, y: 0.65, magnitude: 0.97, color: "#aaccff", spectralClass: "B1III", constellation: "Virgo", description: "Blue giant, binary system." },
  { id: "denebola", name: "Denebola", x: 0.65, y: 0.55, magnitude: 2.14, color: "#aaccff", spectralClass: "A3V", constellation: "Leo", description: "Tail of the lion." },
  { id: "regulus", name: "Regulus", x: 0.52, y: 0.5, magnitude: 1.35, color: "#aaccff", spectralClass: "B8IVn", constellation: "Leo", description: "Heart of the lion." },
  { id: "cor-caroli", name: "Cor Caroli", x: 0.62, y: 0.25, magnitude: 2.83, color: "#aaccff", spectralClass: "A0IIIs", constellation: "Canes Venatici", description: "Brightest in hunting dogs." },

  // Summer stars
  { id: "vega", name: "Vega", x: 0.7, y: 0.2, magnitude: 0.03, color: "#aaccff", spectralClass: "A0V", constellation: "Lyra", description: "Fifth brightest, former pole star." },
  { id: "altair", name: "Altair", x: 0.72, y: 0.45, magnitude: 0.76, color: "#aaccff", spectralClass: "A7V", constellation: "Aquila", description: "One of closest bright stars." },
  { id: "deneb", name: "Deneb", x: 0.75, y: 0.15, magnitude: 1.25, color: "#aaccff", spectralClass: "A2Ia", constellation: "Cygnus", description: "One of most luminous stars." },
  { id: "antares", name: "Antares", x: 0.6, y: 0.7, magnitude: 0.96, color: "#ff4500", spectralClass: "M1.5Iab", constellation: "Scorpius", description: "Heart of the scorpion." },
  { id: "shaula", name: "Shaula", x: 0.65, y: 0.8, magnitude: 1.63, color: "#aaccff", spectralClass: "B2IV", constellation: "Scorpius", description: "Stinger of the scorpion." },
  { id: "atlas", name: "Atlas", x: 0.48, y: 0.45, magnitude: 3.63, color: "#aaccff", spectralClass: "G8III", constellation: "Perseus", description: "Part of Perseus." },

  // Autumn stars
  { id: "alpheratz", name: "Alpheratz", x: 0.8, y: 0.35, magnitude: 2.06, color: "#aaccff", spectralClass: "B8IV", constellation: "Andromeda", description: "Head of Andromeda." },
  { id: "schedar", name: "Schedar", x: 0.85, y: 0.15, magnitude: 2.24, color: "#ffa500", spectralClass: "K0III", constellation: "Cassiopeia", description: "Brightest in Cassiopeia." },
  { id: "mirach", name: "Mirach", x: 0.82, y: 0.4, magnitude: 2.05, color: "#ff6347", spectralClass: "M0III", constellation: "Andromeda", description: "Points to Andromeda Galaxy." },
  { id: "almach", name: "Almach", x: 0.88, y: 0.42, magnitude: 2.1, color: "#ffa500", spectralClass: "K3II", constellation: "Andromeda", description: "Beautiful double star." },
  { id: "enif", name: "Enif", x: 0.78, y: 0.55, magnitude: 2.39, color: "#ffa500", spectralClass: "K2Ib", constellation: "Pegasus", description: "Snout of the winged horse." },
  { id: "markab", name: "Markab", x: 0.75, y: 0.5, magnitude: 2.49, color: "#aaccff", spectralClass: "B9III", constellation: "Pegasus", description: "Corner of the Great Square." },

  // Circumpolar
  { id: "polaris", name: "Polaris", x: 0.5, y: 0.05, magnitude: 1.98, color: "#fff4e0", spectralClass: "F7Ib", constellation: "Ursa Minor", description: "The North Star." },
  { id: "dubhe", name: "Dubhe", x: 0.42, y: 0.12, magnitude: 1.79, color: "#ffa500", spectralClass: "K0III", constellation: "Ursa Major", description: "Pointer to Polaris." },
  { id: "merak", name: "Merak", x: 0.4, y: 0.18, magnitude: 2.37, color: "#aaccff", spectralClass: "A1V", constellation: "Ursa Major", description: "Pointer to Polaris." },
  { id: "alioth", name: "Alioth", x: 0.48, y: 0.14, magnitude: 1.77, color: "#aaccff", spectralClass: "A1III", constellation: "Ursa Major", description: "Brightest in Ursa Major." },
  { id: "alkaid", name: "Alkaid", x: 0.52, y: 0.16, magnitude: 1.86, color: "#aaccff", spectralClass: "B3V", constellation: "Ursa Major", description: "End of Big Dipper handle." },
];
