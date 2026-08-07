import { useEffect, useState } from "react";
import type { Book } from "../types";

export function useBooks() {
    const [books, setBooks] = useState<Book[]>([]);

    useEffect(() => {
        const storedBooks = localStorage.getItem("books");

        if (storedBooks) {
            setBooks(JSON.parse(storedBooks));
        } else {
            setBooks([]);
        }
    }, []);

    function deleteBook(id: string) {
        const updatedBooks = books.filter((book) => book.id !== id);

        setBooks(updatedBooks);
        localStorage.setItem("books", JSON.stringify(updatedBooks));
    }

    return { books, setBooks, deleteBook };
}
