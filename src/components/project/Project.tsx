import Image from "next/image"
import styles from "./Project.module.css"

type ProjectProps = {
  text: string;
  src: any;
  github: string;
};
export default function Project({text,src,github}: ProjectProps) {
  return (
    <div className={styles.containerProject}>
      <p>{text}</p>
      <a href={github} className={styles.githubLink}>Repositório</a>
      <Image src={src} alt="project's pic"></Image>
    </div>
  )
}
