import styles from "./styles.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <h1 className={styles.logo}>Bookshelf.</h1>

                <div className={styles.links}>
                    <a className={`${styles.link} ${styles.link_selected}`}>Biblioteca</a>
                    <a className={styles.link}>Quero Ler</a>
                    <a className={styles.link}>Favoritos</a>
                </div>
            </nav>
        </header>
    );
}
