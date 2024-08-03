"use client";
import Image, { type StaticImageData } from "next/image";
import githublogo from "@/assets/25231.png";
import styles from "./Project.module.css";
import { useState } from "react";

type ProjectProps = {
  text: string;
  src: StaticImageData;
  github: string;
  stack: string;
  about: string;
};

export default function Project({
  text,
  src,
  github,
  stack,
  about,
}: ProjectProps) {
  const [hover, setHover] = useState<Boolean>(false);
  return (
    <div>
      <p className={styles.Stack}>{stack}</p>
      <div className={styles.containerProject}>
        <p className={styles.title}>{text}</p>
        <a href={github} className={styles.githubLink}>
          Repositório{" "}
          <Image src={githublogo} alt="icon" width="30" height="30"></Image>
        </a>
        {hover ? (
          <p
            className={styles.About}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            {about}
          </p>
        ) : null}
        <Image
          src={src}
          alt="project's pic"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className={`${hover ? styles.imgGray : styles.imgProject}`}
        ></Image>
      </div>
    </div>
  );
}
