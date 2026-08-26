import { Plus } from "lucide-react";
import { useBooksContext } from "../../contexts/BooksContext";
import styles from "./styles.module.css";

interface CounterProps {
    onAddClick?: () => void;
}

export default function Counter({ onAddClick }: CounterProps) {
    const { filteredBooks } = useBooksContext();
    const count = filteredBooks.length;

    return (
        <div className={styles.container}>
            <div className={styles.counter}>
                <h2 className={styles.title}>Sua Coleção</h2>
                <p className={styles.count}>
                    {count} {count === 1 ? "item" : "itens"}
                </p>
            </div>

            <button className={styles.add_book_button} onClick={onAddClick}>
                <Plus className={styles.plus_icon} />
                Adicionar Livro
            </button>
        </div>
    );
}
