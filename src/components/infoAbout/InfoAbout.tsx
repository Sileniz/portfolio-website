import styles from "./InfoAbout.module.css"
export default function InfoAbout() {
  return (
    <div className={styles.info}>
      <h1 className={styles.titleAbout}>Olá, me chamo Walisson</h1>
      <h2 className={styles.subAbout}>Desenvolvedor web, prazer!</h2>
      <hr className={styles.hrAbout}/>
      <p className={styles.pAbout}>
      Cursando análise de desenvolvimento de sistemas, sou uma pessoa com desejo de me tornar um desenvolvedor de alto nível e poder contribuir para a comunidade e no futuro poder ajudar na formação de novos desenvolvedores. Gosto de ler mangás e assumido autodidata.
      </p>
    </div>
  )
}
