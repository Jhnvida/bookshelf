import { BookOpen, Heart, Trash } from "lucide-react";
import type { Book } from "../../types";
import styles from "./styles.module.css";

interface BookshelfProps {
    books: Book[];
    onDeleteBook: (id: string) => void;
}

export default function Bookshelf({ books, onDeleteBook }: BookshelfProps) {
    return (
        <div className={styles.container}>
            {books.map((book) => (
                <div key={book.id} className={styles.card}>
                    <div className={styles.imageContainer}>
                        <img src={book.imageUrl} alt={book.title} className={styles.image} />

                        <button className={styles.favoriteButton}>
                            <Heart size={16} fill={book.favorite ? "currentColor" : "none"} />
                        </button>

                        <div className={styles.genreContainer}>
                            <span className={styles.genre}>{book.genre}</span>
                        </div>
                    </div>

                    <div className={styles.content}>
                        <h3 className={styles.title}>{book.title}</h3>
                        <p className={styles.author}>{book.author}</p>

                        <div className={styles.footer}>
                            <div>
                                <button className={styles.readButton}>
                                    <BookOpen size={12} />
                                    {book.status}
                                </button>
                            </div>

                            <button className={styles.deleteButton} onClick={() => onDeleteBook(book.id)}>
                                <Trash size={14} />
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
