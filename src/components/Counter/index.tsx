import { Plus } from "lucide-react";
import styles from "./styles.module.css";

interface CounterProps {
    count: number;
}

export default function Counter({ count }: CounterProps) {
    return (
        <div className={styles.container}>
            <div className={styles.counter}>
                <h2 className={styles.title}>Sua Coleção</h2>
                <p className={styles.count}>
                    {count} {count === 1 ? "item" : "itens"}
                </p>
            </div>

            <button className={styles.add_book_button}>
                <Plus className={styles.plus_icon} />
                Adicionar Livro
            </button>
        </div>
    );
}
