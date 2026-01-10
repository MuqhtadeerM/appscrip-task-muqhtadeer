import Head from "next/head";

export default function SEOHead({ title, description, url }) {
  return (
    <Head>
      {/* Page title (browser tab + SEO) */}
      <title>{title}</title>

      {/* Meta description for search engines */}
      <meta name="description" content={description} />

      {/* Open Graph tags for social sharing */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      {/* Responsive viewport */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Canonical URL to avoid duplicate content */}
      <link rel="canonical" href={url} />
    </Head>
  );
}
