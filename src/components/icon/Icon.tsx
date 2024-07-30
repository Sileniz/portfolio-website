import styles from "@/components/icon/Icon.module.css"
import Image from "next/image"
import icon from "@/assets/icon.png"

export default function Icon() {
  return (
    <div className={styles.divImage}>
      <Image className={styles.iconImage}src={icon} alt="photo-profile"></Image>
      <div className={styles.Border}></div>
    </div>
  )
}
