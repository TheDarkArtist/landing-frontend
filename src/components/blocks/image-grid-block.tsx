import Image from 'next/image';
import styles from './image-grid.block.module.css';

type Props = {
  data: {
    imagesCollection: {
      items: {
        url: string;
      }[];
    };
  };
};

export const ImageGridBlock = ({ data }: Props) => {
  const images = data.imagesCollection.items;

  return (
    <section className={styles.grid}>
      {images.map((img, idx) => (
        <div key={idx} className={styles.cell}>
          <Image src={img.url} alt={`Image ${idx + 1}`} width={300} height={300} />
        </div>
      ))}
    </section>
  );
};

