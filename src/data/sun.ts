import { Star } from "@/types/celestial";

export const sun: Star = {
  id: "sun",
  name: "Sun",
  type: "star",
  description: "Our star, a G-type main-sequence star that provides the energy for life on Earth.",
  color: "#ffd93d",
  spectralClass: "G2V",
  temperature: 5778,
  luminosity: 1,
  radius: 696340,
  mass: 1.989e30,
  age: 4.6e9,
  distance: 0,
  magnitude: -26.74,
  funFacts: [
    "The Sun contains 99.86% of the solar system's mass",
    "Light from the Sun takes 8 minutes 20 seconds to reach Earth",
    "The Sun will eventually become a red giant",
  ],
};
