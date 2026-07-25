import { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "./constants";

export function generateSEOMetadata({
  title,
  description,
  path,
  image,
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
}): Metadata {
  const url = path ? `${SITE_URL}${path}` : SITE_URL;
  const ogImage = image || `${SITE_URL}/og-default.png`;

  return {
    title: `${title} | ${SITE_NAME}`,
    description,
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url,
      siteName: SITE_NAME,
      images: [{ url: ogImage, width: 1200, height: 630 }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [ogImage],
    },
    alternates: { canonical: url },
  };
}
