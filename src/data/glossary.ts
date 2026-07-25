export interface GlossaryTerm {
  term: string;
  definition: string;
  category: string;
}

export const glossary: GlossaryTerm[] = [
  { term: "Astronomical Unit (AU)", definition: "The average distance from Earth to the Sun, approximately 149.6 million km.", category: "measurement" },
  { term: "Light Year", definition: "The distance light travels in one year, about 9.46 trillion km.", category: "measurement" },
  { term: "Parsec", definition: "A unit of distance equal to 3.26 light years, based on stellar parallax.", category: "measurement" },
  { term: "Spectral Class", definition: "A classification of stars based on their temperature and spectral characteristics.", category: "stellar" },
  { term: "Red Giant", definition: "A dying star that has exhausted its hydrogen fuel and expanded greatly.", category: "stellar" },
  { term: "White Dwarf", definition: "The remnant core of a low-mass star after it has shed its outer layers.", category: "stellar" },
  { term: "Neutron Star", definition: "An extremely dense remnant of a massive star after a supernova.", category: "stellar" },
  { term: "Accretion Disk", definition: "A rotating disk of matter formed around a massive body like a black hole.", category: "cosmic" },
  { term: "Event Horizon", definition: "The boundary around a black hole beyond which nothing can escape.", category: "cosmic" },
  { term: "Lagrange Point", definition: "A position where the gravitational pull of two large masses precisely equals the centripetal force.", category: "orbital" },
];
