import { Search } from "lucide-react";
import { useBooksContext } from "../../contexts/BooksContext";
import { genres_list } from "../../utils/constants";
import styles from "./styles.module.css";

export default function Filters() {
    const { searchText, selectedGenre, setSearchText, setSelectedGenre } = useBooksContext();
    const genres = ["Todos", ...genres_list];

    return (
        <div className={styles.container}>
            <div className={styles.search_container}>
                <Search className={styles.search_icon} />
                <input
                    type="text"
                    className={styles.search_input}
                    name="search"
                    id="search"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    placeholder="Pesquisar por título..."
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
