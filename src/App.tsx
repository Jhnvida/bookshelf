import { useState } from "react";
import styles from "./App.module.css";
import AddBook from "./components/AddBook";
import Bookshelf from "./components/Bookshelf";
import Counter from "./components/Counter";
import Filters from "./components/Filters";
import Header from "./components/Header";
import { useBooks } from "./hooks/useBooks";
import { useBooksFilter } from "./hooks/useBooksFilter";

export default function App() {
    const { books, deleteBook } = useBooks();
    const { selectedGenre, setSelectedGenre, filteredBooks, searchText, setSearchText } = useBooksFilter(books);
    const [visibleForm, setVisibleForm] = useState(false);

    return (
        <>
            <Header onHomeClick={() => setVisibleForm(false)} />

            <main className={styles.main}>
                {visibleForm ? (
                    <AddBook onCancel={() => setVisibleForm(false)} />
                ) : (
                    <>
                        <Filters
                            selectedGenre={selectedGenre}
                            setSelectedGenre={setSelectedGenre}
                            searchText={searchText}
                            setSearchText={setSearchText}
                        />
                        <Counter count={filteredBooks.length} onAddClick={() => setVisibleForm(true)} />
                        <Bookshelf books={filteredBooks} onDeleteBook={deleteBook} />
                    </>
                )}
            </main>
        </>
    );
}
