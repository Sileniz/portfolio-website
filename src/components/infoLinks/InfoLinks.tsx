import Image from "next/image"
import Link from "next/link"
import github from "@/assets/25231.png"
import linkedin from "@/assets/linkedin.png"
import curriculum from "@/assets/curriculum.svg"

import styles from "./InfoLinks.module.css"

export default function InfoLinks() {
  return (
    <div className={styles.divLinks}>
      <Link href="https://github.com/Sileniz" target="_blank" rel="noopener noreferrer" title="Github's link">
        <Image src={github} alt="github-icon" className={styles.Image}></Image>
      </Link>
      <Link href="https://www.linkedin.com/in/walisson-da-silva-b71925297/" target="_blank" rel="noopener noreferrer" title="Linkedin's link">
        <Image src={linkedin} alt="linkedin-icon" className={styles.Image}></Image>
      </Link>
      <Link href="#" target="_blank" rel="noopener noreferrer" title="Curriculum's link">
        <Image src={curriculum} alt="curriculum-icon" className={styles.Image}></Image>
      </Link>
    </div>
  )
}
