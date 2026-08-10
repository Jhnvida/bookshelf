import { Search } from "lucide-react";
import { genres_list } from "../../utils/constants";
import styles from "./styles.module.css";

interface FiltersProps {
    searchText: string;
    selectedGenre: string;
    setSearchText: (text: string) => void;
    setSelectedGenre: (genre: string) => void;
}

export default function Filters({ searchText, selectedGenre, setSearchText, setSelectedGenre }: FiltersProps) {
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
