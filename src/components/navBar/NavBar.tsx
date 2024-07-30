import Link from "next/link"
import styles from "./NavBar.module.css"

export default function NavBar() {
  return (
    <nav className={styles.navHeader}>
      <ul className={styles.ulNav}>
        <li><Link href="/" className={styles.liNav}>Sobre</Link></li>
        <li><Link href="/projetos" className={styles.liNav}>Projetos</Link></li>
        <li><Link href="#" className={styles.liNav}>Habilidades</Link></li>
      </ul>
    </nav>
  )
}
