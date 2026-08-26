import { useState } from "react";
import styles from "./App.module.css";
import AddBook from "./components/AddBook";
import BooksFilter from "./components/BooksFilter";
import Bookshelf from "./components/Bookshelf";
import Container from "./components/Container";
import Counter from "./components/Counter";
import Header from "./components/Header";
import { BooksProvider } from "./contexts/BooksContext";

export default function App() {
    const [visibleForm, setVisibleForm] = useState(false);

    return (
        <BooksProvider>
            <Header />

            <main>
                <Container className={styles.main}>
                    {visibleForm ? (
                        <AddBook onCancel={() => setVisibleForm(false)} />
                    ) : (
                        <>
                            <BooksFilter />
                            <Counter onAddClick={() => setVisibleForm(true)} />
                            <Bookshelf />
                        </>
                    )}
                </Container>
            </main>
        </BooksProvider>
    );
}
