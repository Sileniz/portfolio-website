import styles from "./InfoLangs.module.css"
import Image from "next/image"
import icons from "@/utils/langs"
export default function InfoLangs() {
  return (
    <div className={styles.divLang}>
      {icons.map((icon, index) => (
        <Image
          key={index}
          src={icon.src}
          alt={`${icon.title}-icon`}
          className={styles.lang}
          title={icon.title}
        />
      ))}
    </div>
  )
}