import Link from "next/link";
import { mainNavigation, secondaryNavigation } from "@/lib/navigation";

function Footer() {
  return (
    <footer className="bg-cosmic-900 border-t border-border-default">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-bold font-[family-name:var(--font-display)] text-text-primary mb-2">
              Cosmos Odyssey
            </h3>
            <p className="text-sm text-text-secondary max-w-md">
              An immersive interactive space exploration platform. Discover the universe through
              cutting-edge 3D visualizations and interactive experiences.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-text-primary mb-3 uppercase tracking-wider">Explore</h4>
            <ul className="space-y-2">
              {mainNavigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-text-secondary hover:text-plasma-300 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-text-primary mb-3 uppercase tracking-wider">Discover</h4>
            <ul className="space-y-2">
              {secondaryNavigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-text-secondary hover:text-plasma-300 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border-default text-center text-sm text-text-muted">
          <p>&copy; {new Date().getFullYear()} Cosmos Odyssey. Built for the curious minds.</p>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
