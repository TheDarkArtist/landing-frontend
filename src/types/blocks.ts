export type HeroBlock = {
  __typename?: 'HeroBlock';
  heading: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage: {
    url: string;
    title?: string;
    width?: number;
    height?: number;
  };
};


export type TwoColumnBlock = {
  __typename?: 'TwoColumnBlock';
  leftHeading: string;
  leftText: string;
  ctaText: string;
  ctaLink: string;
  rightImage: {
    url: string;
    title?: string;
    width?: number;
    height?: number;
  };
};

export type ImageGridBlock = {
  __typename?: 'ImageGridBlock';
  imagesCollection: {
    items: {
      url: string;
      title?: string;
      width?: number;
      height?: number;
    }[];
  };
};

export type BlockConfig = {
  id: string;
  type: 'hero' | 'twoColumn' | 'imageGrid';
};

export type Block =
  | { type: 'hero'; data: HeroBlock }
  | { type: 'twoColumn'; data: TwoColumnBlock }
  | { type: 'imageGrid'; data: ImageGridBlock };

