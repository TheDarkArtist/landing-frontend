import Image from 'next/image';
import styles from './hero-block.module.css';

type Props = {
  data: {
    heading: string;
    subtitle: string;
    cta: string;
    backgroundImage: {
      url: string;
    };
  };
};

export const HeroBlock = ({ data }: Props) => {
  const { heading, subtitle, cta, backgroundImage } = data;

  return (
    <section className={styles.hero}>
      <Image
        src={backgroundImage.url}
        alt={heading}
        layout="fill"
        objectFit="cover"
        className={styles.bg}
        priority
      />
      <div className={styles.overlay}>
        <h1>{heading}</h1>
        <p>{subtitle}</p>
        <a href="#" className={styles.cta}>{cta}</a>
      </div>
    </section>
  );
};

