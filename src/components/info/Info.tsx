import styles from "./Info.module.css"
import InfoLinks from "@/components/infoLinks/InfoLinks"
import InfoAbout from "../infoAbout/InfoAbout"
import InfoLangs from "../infoLangs/InfoLangs"
export default function Info() {
  return (
   <div className={styles.divAbout}>
      <InfoAbout/>
      <hr className={styles.hrAbout}/>
      <div className={styles.divLinks}>
        <InfoLinks />
        <hr className={styles.hrLinks}/>
        <InfoLangs/>
      </div>
   </div>
  )
}
