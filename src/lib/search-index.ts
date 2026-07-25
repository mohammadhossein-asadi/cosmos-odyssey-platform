import { planets } from "@/data/planets";
import { stars } from "@/data/stars";
import { missions } from "@/data/missions";
import { encyclopediaEntries } from "@/data/encyclopedia";
import { SearchResult } from "@/types/common";

export function buildSearchIndex(): SearchResult[] {
  const index: SearchResult[] = [];

  planets.forEach((planet) => {
    index.push({
      id: planet.id,
      title: planet.name,
      description: planet.description,
      type: "planet",
      href: `/encyclopedia/${planet.id}`,
    });
  });

  stars.forEach((star) => {
    index.push({
      id: star.id,
      title: star.name,
      description: star.description,
      type: "star",
      href: `/star-explorer?star=${star.id}`,
    });
  });

  missions.forEach((mission) => {
    index.push({
      id: mission.id,
      title: mission.name,
      description: mission.description,
      type: "mission",
      href: `/missions#${mission.id}`,
    });
  });

  encyclopediaEntries.forEach((entry) => {
    index.push({
      id: entry.id,
      title: entry.title,
      description: entry.summary,
      type: "encyclopedia",
      href: `/encyclopedia/${entry.id}`,
    });
  });

  return index;
}

export function searchIndex(query: string): SearchResult[] {
  const index = buildSearchIndex();
  const lowerQuery = query.toLowerCase();

  return index.filter(
    (item) =>
      item.title.toLowerCase().includes(lowerQuery) ||
      item.description.toLowerCase().includes(lowerQuery) ||
      item.type.toLowerCase().includes(lowerQuery)
  );
}
