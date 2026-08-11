import { useState } from "react";
import styles from "./App.module.css";
import AddBook from "./components/AddBook";
import BooksFilter from "./components/BooksFilter";
import Bookshelf from "./components/Bookshelf";
import Container from "./components/Container";
import Counter from "./components/Counter";
import Header from "./components/Header";
import { useBooks } from "./hooks/useBooks";
import { useBooksFilter } from "./hooks/useBooksFilter";

export default function App() {
    const { books, addBook, deleteBook } = useBooks();
    const { selectedGenre, setSelectedGenre, filteredBooks, searchText, setSearchText } = useBooksFilter(books);
    const [visibleForm, setVisibleForm] = useState(false);

    return (
        <>
            <Header />

            <main>
                <Container className={styles.main}>
                    {visibleForm ? (
                        <AddBook onAdd={addBook} onCancel={() => setVisibleForm(false)} />
                    ) : (
                        <>
                            <BooksFilter
                                selectedGenre={selectedGenre}
                                setSelectedGenre={setSelectedGenre}
                                searchText={searchText}
                                setSearchText={setSearchText}
                            />
                            <Counter count={filteredBooks.length} onAddClick={() => setVisibleForm(true)} />
                            <Bookshelf books={filteredBooks} onDeleteBook={deleteBook} />
                        </>
                    )}
                </Container>
            </main>
        </>
    );
}
