# Landing Page

This is a custom Contentful app built with Vite and React that allows content editors to visually build landing pages using drag-and-drop blocks like Hero, Two Column, and Image Grid.

The layout is stored in a Contentful field (`layoutConfig`) and automatically synced using Redux and autosave middleware. A preview button opens the generated landing page on a deployed Next.js site using the page slug.

The app is designed to streamline visual content editing without needing to write code.

## 🛠 Setup Instructions

Before running the landing page repository locally, make sure to create a `.env` file at the root of the project and add the following environment variables:

```
CONTENTFUL_SPACE_ID=<your_space_id>
CONTENTFUL_ENVIRONMENT=master
CONTENTFUL_DELIVERY_TOKEN=<your_delivery_token>
```

Replace the placeholders with your actual Contentful credentials. This is necessary to fetch and render content from your Contentful space.


```bash
# 1. Clone the repository
git clone https://github.com/TheDarkArtist/landing-frontend.git
cd landing-frontend

# 2. Install dependencies
bun install

# 3. Run the development server
bun run dev
````


### 🔗 Live Links

* **Contentful Builder App**: [https://contentful-app-eta.vercel.app](https://contentful-app-eta.vercel.app)
* **Landing Page (Static Frontend)**: [https://landing-frontend-sigma-seven.vercel.app](https://landing-frontend-sigma-seven.vercel.app) (this.app)
* **Install Landing Page Builder in Contentful**: [Open in Contentful](https://app.contentful.com/deeplink?link=apps&id=3zfuwCmVtmPg1ivrFyHEnZ)




## 🔗 Related Links

* Builder App Repo: [https://github.com/TheDarkArtist/contentful-app](https://github.com/TheDarkArtist/contentful-app)
* Install Builder in Contentful: [Contentful App Link](https://app.contentful.com/deeplink?link=apps&id=3zfuwCmVtmPg1ivrFyHEnZ)

```
```

