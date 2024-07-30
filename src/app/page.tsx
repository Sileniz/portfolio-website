import styles from "@/app/page.module.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import About from "@/components/about/About";
export default function Home() {
  return (
    <>
    <Header/>
      <main className={styles.main}>
          <About/>
      </main>
    <Footer/>
    </>
  );
}
