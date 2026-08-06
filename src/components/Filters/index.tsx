import { Search } from "lucide-react";
import { useState } from "react";
import styles from "./styles.module.css";

const genres = [
    "Todos",
    "Ficção",
    "Romance",
    "Comédia",
    "Mistério",
    "Suspense",
    "Infantil",
    "Aventura",
    "Fantasia",
    "Clássicos",
    "Quadrinhos",
    "Ficção Científica",
];

export default function Filters() {
    const [selectedGenre, setSelectedGenre] = useState("Todos");

    return (
        <div className={styles.container}>
            <div className={styles.search_container}>
                <Search className={styles.search_icon} />
                <input
                    type="text"
                    className={styles.search_input}
                    name="search"
                    id="search"
                    placeholder="Pesquisar por título ou autor..."
                />
            </div>

            <div className={styles.genres_container}>
                {genres.map((genre) => (
                    <button
                        key={genre}
                        className={`${styles.genre_button} ${selectedGenre === genre ? styles.selected_genre : ""}`}
                        onClick={() => setSelectedGenre(genre)}
                    >
                        {genre}
                    </button>
                ))}
            </div>
        </div>
    );
}
