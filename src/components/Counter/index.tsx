import { Plus } from "lucide-react";
import styles from "./styles.module.css";

export default function Counter() {
    return (
        <div className={styles.container}>
            <div className={styles.counter}>
                <h2 className={styles.title}>Sua Coleção</h2>
                <p className={styles.count}>3 itens</p>
            </div>

            <button className={styles.add_book_button}>
                <Plus className={styles.plus_icon} />
                Adicionar Livro
            </button>
        </div>
    );
}
