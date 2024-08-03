import styles from "@/app/page.module.css";
import ListProject from "@/components/listProjects/ListProjects";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
export default function Home() {
  return (
    <>
      <Header/>
        <main className={styles.main}>
          <ListProject/>
        </main>
      <Footer/>
    </>
  );
}
