import Image from 'next/image';
import styles from './two-column-block.module.css';
import Link from 'next/link';

type Props = {
  data: {
    leftHeading: string;
    leftText: string;
    ctaText: string;
    ctaLink: string;
    rightImage: {
      url: string;
    };
  };
};

export const TwoColumnBlock = ({ data }: Props) => {
  const { leftHeading, leftText, ctaLink, ctaText, rightImage } = data;

  return (
    <section className={styles.container}>
      <div className={styles.text}>
        <h2>{leftHeading}</h2>
        <p>{leftText}</p>
        <Link href={ctaLink} className={styles.cta}>{ctaText}</Link>
      </div>
      <div className={styles.image}>
        <Image src={rightImage.url} alt={leftHeading} width={600} height={400} />
      </div>
    </section>
  );
};

