import Image, { type StaticImageData } from "next/image"
import githublogo from "@/assets/25231.png"
import styles from "./Project.module.css"

type ProjectProps = {
  text: string;
  src: StaticImageData;
  github: string;
};
export default function Project({text,src,github}: ProjectProps) {
  return (
    <div className={styles.containerProject}>
      <p>{text}</p>
      <a href={github} className={styles.githubLink}>Repositório <Image src={githublogo} alt="icon" width="30" height="30"></Image></a>
      <Image src={src} alt="project's pic"></Image>
    </div>
  )
}
