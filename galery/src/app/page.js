import Foto from "./components/foto";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.main}>
      <Foto />
      <Foto/>
      <Foto />
      <Foto/>
      <Foto />
      <Foto/>
    </div>
  );
}
