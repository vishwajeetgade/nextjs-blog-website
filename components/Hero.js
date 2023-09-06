import React from "react";
import styles from "./Hero.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image src={"/images/hinata-profile.jpg"} alt="An image showing Hinata" width={300} height={300}/>
      </div>
      <h1>Hi, I'm Hinata Hyuga</h1>
      <p>
        I blog about web development - especially React.
      </p>
    </section>
  );
};

export default Hero;
