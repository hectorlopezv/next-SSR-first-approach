import { FC } from "react";
import Image from "next/image";
import styles from "../../styles/hero.module.css";
interface props {}

const Hero: FC<props> = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image
          src="/images/site/max.png"
          alt="image showing the dude"
          height={300}
          width={300}
          layout="responsive"
        />
      </div>
      <div>Hi Im Max</div>
      <p>
        A blog About Web Development - especially for frameworks such as React
      </p>
    </section>
  );
};

export default Hero;
