import Image from "next/image"
import styles from "./Project.module.css"

type ProjectProps = {
  text: string;
  src: any;
};
export default function Project({text,src}: ProjectProps) {
  return (
    <div className={styles.containerProject}>
      <p>{text}</p>
      <Image src={src} alt="project's pic"></Image>
    </div>
  )
}
