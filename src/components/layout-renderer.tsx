'use client';

import { HeroBlock } from './blocks/hero-block';
import { TwoColumnBlock } from './blocks/two-column-block';
import { ImageGridBlock } from './blocks/image-grid-block';

import type { BlockConfig, HeroBlock as HeroData, TwoColumnBlock as TwoColData, ImageGridBlock as ImgGridData } from '@/types/blocks';

type Props = {
  layout: BlockConfig[];
  content: {
    heroBlock?: HeroData;
    twoColumnBlock?: TwoColData;
    imageGridBlock?: ImgGridData;
  };
};

export const LayoutRenderer = ({ layout, content }: Props) => {
  return (
    <>
      {layout.map((block) => {
        switch (block.type) {
          case 'hero':
            return content.heroBlock ? (
              <HeroBlock key={block.id} data={content.heroBlock} />
            ) : null;

          case 'twoColumn':
            return content.twoColumnBlock ? (
              <TwoColumnBlock key={block.id} data={content.twoColumnBlock} />
            ) : null;

          case 'imageGrid':
            return content.imageGridBlock ? (
              <ImageGridBlock key={block.id} data={content.imageGridBlock} />
            ) : null;

          default:
            return null;
        }
      })}
    </>
  );
};

