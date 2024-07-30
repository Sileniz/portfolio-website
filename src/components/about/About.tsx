import Icon from "../icon/Icon"
import InfoAbout from "../info/Info"
import styles from "./About.module.css"
export default function About() {
  return (
    <section className={styles.sectionAbout}>
      <Icon />
      <InfoAbout/>
    </section>
  )
}
