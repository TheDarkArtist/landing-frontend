import Image from 'next/image';
import styles from './two-column-block.module.css';

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
  console.log(data)
  const { leftHeading, leftText, ctaLink, ctaText, rightImage } = data;

  return (
    <section className={styles.container}>
      <div className={styles.text}>
        <h2>{leftHeading}</h2>
        <p>{leftText}</p>
        <a href={ctaLink} className={styles.cta}>{ctaText}</a>
      </div>
      <div className={styles.image}>
        <Image src={rightImage.url} alt={leftHeading} width={600} height={400} />
      </div>
    </section>
  );
};

