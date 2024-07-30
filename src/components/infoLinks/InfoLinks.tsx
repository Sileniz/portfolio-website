import Image from "next/image"
import Link from "next/link"
import github from "@/assets/25231.png"
import styles from "./InfoLinks.module.css"
export default function InfoLinks() {
  return (
    <div className={styles.divLinks}>
      <Image src={github} alt="github-icon" className={styles.Image}></Image>
      <Link href="https://github.com/Sileniz" target="_blank" rel="noopener noreferrer" title="Github's link">/Github</Link>
    </div>
  )
}
