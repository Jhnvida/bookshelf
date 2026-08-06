import { useState } from "react";
import styles from "./App.module.css";
import Bookshelf from "./components/Bookshelf";
import Counter from "./components/Counter";
import Filters from "./components/Filters";
import Header from "./components/Header";
import type { Book } from "./types";

const books: Book[] = [
    {
        id: "1",
        title: "O Senhor dos Anéis",
        author: "J.R.R. Tolkien",
        genre: "Fantasia",
        imageUrl: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e",
        favorite: true,
        status: "Lido",
    },
    {
        id: "2",
        title: "Dom Casmurro",
        author: "Machado de Assis",
        genre: "Clássicos",
        imageUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f",
        favorite: false,
        status: "Lendo",
    },
    {
        id: "3",
        title: "Assassinato no Expresso do Oriente",
        author: "Agatha Christie",
        genre: "Mistério",
        imageUrl: "https://images.unsplash.com/photo-1510172951991-856a654063f9",
        favorite: false,
        status: "Não lido",
    },
    {
        id: "4",
        title: "Duna",
        author: "Frank Herbert",
        genre: "Ficção Científica",
        imageUrl: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
        favorite: true,
        status: "Lido",
    },
];

export default function App() {
    const [selectedGenre, setSelectedGenre] = useState("Todos");

    return (
        <>
            <Header />

            <main className={styles.main}>
                <Filters selectedGenre={selectedGenre} setSelectedGenre={setSelectedGenre} />
                <Counter />
                <Bookshelf books={books} />
            </main>
        </>
    );
}
