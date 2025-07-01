import { LayoutRenderer } from '@/components/layout-renderer';
import { fetchLandingPage } from '@/lib/contentful';
import { notFound } from 'next/navigation';

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

export default async function LandingPage({ params }: Props) {
  const { slug } = await params;

  const data = await fetchLandingPage(slug);

  if (!data) return notFound();

  const layout = data.layoutConfig || [];

  return (
    <main>
      <LayoutRenderer layout={layout} content={data} />
    </main>
  );
}

