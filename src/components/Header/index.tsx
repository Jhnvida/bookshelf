import styles from "./styles.module.css";

interface HeaderProps {
    onHomeClick?: () => void;
}

export default function Header({ onHomeClick }: HeaderProps) {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <h1 className={styles.logo} onClick={onHomeClick} style={{ cursor: "pointer" }}>
                    Bookshelf.
                </h1>

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
            </nav>
        </header>
    );
}
