import { planets } from "@/data/planets";
import { PageContainer } from "@/components/layout/PageContainer";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return planets.map((p) => ({ slug: p.id }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const planet = planets.find((p) => p.id === slug);
  if (!planet) return {};
  return {
    title: `${planet.name} | Cosmos Odyssey Encyclopedia`,
    description: planet.description,
  };
}

export default async function PlanetDetailPage({ params }: Props) {
  const { slug } = await params;
  const planet = planets.find((p) => p.id === slug);

  if (!planet) notFound();

  return (
    <PageContainer narrow>
      <Link href="/encyclopedia" className="inline-flex items-center gap-2 text-sm text-plasma-400 hover:text-plasma-300 mb-6">
        <svg className="w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
        Back to Encyclopedia
      </Link>

      <div className="flex items-center gap-4 mb-8">
        <div
          className="w-20 h-20 rounded-full"
          style={{ backgroundColor: planet.color, boxShadow: `0 0 40px ${planet.color}40` }}
        />
        <div>
          <h1 className="text-4xl font-bold font-[family-name:var(--font-display)] text-text-primary">
            {planet.name}
          </h1>
          <p className="text-text-secondary">{planet.description}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        {[
          { label: "Distance from Sun", value: `${planet.distanceFromSun.toLocaleString()} km` },
          { label: "Diameter", value: `${planet.diameter.toLocaleString()} km` },
          { label: "Mass", value: planet.mass },
          { label: "Gravity", value: `${planet.gravity} m/s²` },
          { label: "Temperature", value: `${planet.temperature.average}°C` },
          { label: "Moons", value: `${planet.moons.length}` },
        ].map((item) => (
          <div key={item.label} className="bg-surface-glass rounded-lg p-4 border border-border-default">
            <div className="text-[10px] text-text-muted uppercase tracking-wider mb-1">{item.label}</div>
            <div className="text-sm font-semibold text-text-primary">{item.value}</div>
          </div>
        ))}
      </div>

      {planet.funFacts.length > 0 && (
        <div className="bg-surface-primary rounded-xl border border-border-default p-6 mb-8">
          <h2 className="text-lg font-semibold text-text-primary mb-4 font-[family-name:var(--font-display)]">Fun Facts</h2>
          <ul className="space-y-3">
            {planet.funFacts.map((fact, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-text-secondary">
                <span className="text-plasma-400 mt-0.5">★</span>
                {fact}
              </li>
            ))}
          </ul>
        </div>
      )}

      {planet.explorationMissions.length > 0 && (
        <div className="bg-surface-primary rounded-xl border border-border-default p-6">
          <h2 className="text-lg font-semibold text-text-primary mb-4 font-[family-name:var(--font-display)]">Exploration Missions</h2>
          <div className="flex flex-wrap gap-2">
            {planet.explorationMissions.map((mission) => (
              <span key={mission} className="px-3 py-1 rounded-full bg-plasma-500/20 text-plasma-300 text-sm border border-plasma-500/30">
                {mission}
              </span>
            ))}
          </div>
        </div>
      )}
    </PageContainer>
  );
}
