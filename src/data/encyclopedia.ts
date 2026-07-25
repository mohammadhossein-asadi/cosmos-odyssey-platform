export interface EncyclopediaEntry {
  id: string;
  title: string;
  category: "planet" | "star" | "moon" | "asteroid" | "comet" | "nebula" | "galaxy" | "black-hole";
  summary: string;
  content: string;
  keyFacts: string[];
  relatedTopics: string[];
}

export const encyclopediaEntries: EncyclopediaEntry[] = [
  {
    id: "mercury-overview",
    title: "Mercury: The Swift Planet",
    category: "planet",
    summary: "The smallest planet and closest to the Sun.",
    content: "Mercury is the smallest planet in our solar system and the closest to the Sun. Despite its proximity to the Sun, it is not the hottest planet—that title belongs to Venus. Mercury has no atmosphere to retain heat, leading to extreme temperature variations.",
    keyFacts: ["Diameter: 4,879 km", "Day length: 59 Earth days", "Year length: 88 Earth days", "No moons", "No atmosphere"],
    relatedTopics: ["venus-overview", "sun-overview"],
  },
  {
    id: "earth-overview",
    title: "Earth: Our Home World",
    category: "planet",
    summary: "The only known planet to harbor life.",
    content: "Earth is the third planet from the Sun and the only astronomical object known to harbor life. About 71% of Earth's surface is covered with water. Earth's atmosphere and magnetic field protect life from harmful solar radiation.",
    keyFacts: ["Diameter: 12,742 km", "1 known moon", "71% water surface", "Age: 4.54 billion years", "One known civilization"],
    relatedTopics: ["moon-overview", "mars-overview"],
  },
  {
    id: "mars-overview",
    title: "Mars: The Red Planet",
    category: "planet",
    summary: "The fourth planet, with the largest volcano in the solar system.",
    content: "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System. It is often called the 'Red Planet' due to its reddish appearance caused by iron oxide on its surface.",
    keyFacts: ["Diameter: 6,779 km", "2 known moons", "Olympus Mons: tallest volcano", "Age: 4.5 billion years", "Target for human colonization"],
    relatedTopics: ["earth-overview", "phobos-overview"],
  },
  {
    id: "jupiter-overview",
    title: "Jupiter: The Gas Giant King",
    category: "planet",
    summary: "The largest planet with the iconic Great Red Spot.",
    content: "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass more than two and a half times that of all other planets in the Solar System combined.",
    keyFacts: ["Diameter: 139,820 km", "95 known moons", "Great Red Spot storm", "Strongest magnetic field", "Could fit 1,300 Earths"],
    relatedTopics: ["saturn-overview", "europa-overview"],
  },
  {
    id: "black-holes",
    title: "Black Holes: Cosmic Enigmas",
    category: "black-hole",
    summary: "Regions of spacetime where gravity is so strong nothing can escape.",
    content: "A black hole is a region of spacetime where gravity is so strong that nothing—no particles or even electromagnetic radiation such as light—can escape from it. The theory of general relativity predicts that a sufficiently compact mass can deform spacetime to form a black hole.",
    keyFacts: ["Not visible directly", "Event horizon is the point of no return", "Can merge with other black holes", "Time dilates near a black hole", "Supermassive black holes exist at galaxy centers"],
    relatedTopics: ["earth-overview", "jupiter-overview"],
  },
  {
    id: "constellations-guide",
    title: "Constellations: Patterns in the Sky",
    category: "star",
    summary: "Groups of stars forming patterns recognized since antiquity.",
    content: "Constellations are patterns of stars in the sky that have been recognized and named by cultures throughout history. The International Astronomical Union recognizes 88 modern constellations.",
    keyFacts: ["88 officially recognized constellations", "Used for navigation", "Some visible year-round", "Some are seasonal", "Named after mythological figures"],
    relatedTopics: ["sirius-overview", "betelgeuse-overview"],
  },
];
