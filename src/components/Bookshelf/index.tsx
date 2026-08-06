import { BookOpen, Heart } from "lucide-react";
import type { Book } from "../../types";
import styles from "./styles.module.css";

interface BookshelfProps {
    books: Book[];
}

export default function Bookshelf({ books }: BookshelfProps) {
    return (
        <div className={styles.bookshelf}>
            {books.map((book) => (
                <div key={book.id} className={styles.card}>
                    <div className={styles.imageContainer}>
                        <img src={book.imageUrl} alt={book.title} className={styles.image} />

                        <button className={styles.favoriteButton} aria-label="Favoritar">
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
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
