import Container from "../Container";
import styles from "./styles.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <nav>
                <Container className={styles.nav}>
                    <h1 className={styles.logo}>Estante.</h1>

                    <div className={styles.links}>
                        <a
                            href="https://github.com/Jhnvida/bookshelf"
                            target="_blank"
                            rel="noreferrer"
                            className={styles.link}
                        >
                            Código no GitHub
                        </a>
                    </div>
                </Container>
            </nav>
        </header>
    );
}
