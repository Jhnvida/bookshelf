import styles from "./App.module.css";
import Bookshelf from "./components/Bookshelf";
import Counter from "./components/Counter";
import Filters from "./components/Filters";
import Header from "./components/Header";
import { useBooks } from "./hooks/useBooks";
import { useBooksFilter } from "./hooks/useBooksFilter";

export default function App() {
    const { books } = useBooks();
    const { selectedGenre, setSelectedGenre, filteredBooks, searchText, setSearchText } = useBooksFilter(books);

    return (
        <>
            <Header />

            <main className={styles.main}>
                <Filters
                    selectedGenre={selectedGenre}
                    setSelectedGenre={setSelectedGenre}
                    searchText={searchText}
                    setSearchText={setSearchText}
                />
                <Counter count={filteredBooks.length} />
                <Bookshelf books={filteredBooks} />
            </main>
        </>
    );
}
