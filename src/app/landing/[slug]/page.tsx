import { LayoutRenderer } from '@/components/layout-renderer';
import { fetchLandingPage } from '@/lib/contentful';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

type Props = {
  params: Promise<{ slug: string }>;
};

type LandingPageItem = {
  slug: string;
};

export async function generateStaticParams() {
  const query = `
    {
      landingPageCollection {
        items {
          slug
        }
      }
    }
  `;

  const res = await fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.CONTENTFUL_DELIVERY_TOKEN}`,
    },
    body: JSON.stringify({ query }),
    next: { revalidate: 60 },
  });

  const json = await res.json();

  if (!json.data) {
    console.error('GraphQL Error:', JSON.stringify(json, null, 2));
    throw new Error('Failed to fetch landingPageCollection from Contentful');
  }

  return (json.data.landingPageCollection.items as LandingPageItem[]).map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const data = await fetchLandingPage(slug);

  if (!data) return {};

  return {
    title: data.title ?? 'Landing Page',
    description: data.description ?? 'Generated via Contentful CMS',
    openGraph: {
      title: data.title ?? 'Landing Page',
      description: data.description ?? '',
      url: `https://landing-frontend-sigma-seven.vercel.app/${slug}`,
      siteName: 'TDA Landing',
      images: [{ url: "/og/og-landing-page.png", width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
    },
  };
}

export default async function LandingPage({ params }: Props) {
  const { slug } = await params

  const data = await fetchLandingPage(slug);

  if (!data) return notFound();

  const layout = data.layoutConfig || [];

  return (
    <main>
      <LayoutRenderer layout={layout} content={data} />
    </main>
  );
}

