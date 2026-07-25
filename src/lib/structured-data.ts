export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Cosmos Odyssey",
    url: "https://cosmos-odyssey-platform.vercel.app",
    description: "An immersive interactive space exploration and astronomy experience platform.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://cosmos-odyssey-platform.vercel.app/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Cosmos Odyssey",
    url: "https://cosmos-odyssey-platform.vercel.app",
    logo: "https://cosmos-odyssey-platform.vercel.app/icons/logo.svg",
  };
}
