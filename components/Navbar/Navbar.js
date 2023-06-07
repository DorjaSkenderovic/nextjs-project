import styles from "./Navbar.module.scss";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="/">Pocetna</Link>
      <div className={styles.other}>
        Ostalo
        <div className={styles.dropdown}>
          <Link href="/other/about">O nama</Link>
          <Link href="/other/contact">Kontakt</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
