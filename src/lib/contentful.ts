const SPACE_ID = process.env.CONTENTFUL_SPACE_ID!;
const TOKEN = process.env.CONTENTFUL_DELIVERY_TOKEN!;

const ENDPOINT = `https://graphql.contentful.com/content/v1/spaces/${SPACE_ID}`;

export async function fetchLandingPage(slug: string) {
  const query = `
  query GetLandingPage($slug: String!) {
  landingPageCollection(limit: 1, where: { slug: $slug }) {
    items {
      title
      layoutConfig
      heroBlock {
        heading
        subtitle
        ctaLink
        backgroundImage {
          url
        }
      }
      twoColumnBlock {
        leftHeading
        leftText
        ctaLink
        rightImage {
          url
        }
      }
      imageGridBlock {
        imagesCollection {
          items {
            url
          }
        }
      }
    }
  }
}
`;


  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({ query, variables: { slug } }),
    next: { revalidate: 60 },
  });

  const json = await res.json();

  return json?.data?.landingPageCollection?.items?.[0] || null;
}

