import styles from "@/app/page.module.css";
import ListProject from "@/components/listProjects/ListProjects";
export default function Home() {
  return (
      <main className={styles.main}>
          <ListProject/>
      </main>
  );
}
