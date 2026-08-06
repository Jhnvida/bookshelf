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

    return { books, setBooks };
}
