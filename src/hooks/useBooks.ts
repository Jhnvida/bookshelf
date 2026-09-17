import { useEffect, useReducer } from "react";
import type { Book } from "../types";

type Action =
    | { type: "SET_BOOKS"; payload: Book[] }
    | { type: "ADD_BOOK"; payload: Book }
    | { type: "DELETE_BOOK"; payload: string };

function booksReducer(state: Book[], action: Action): Book[] {
    switch (action.type) {
        case "SET_BOOKS":
            return action.payload;
        case "ADD_BOOK":
            return [...state, action.payload];
        case "DELETE_BOOK":
            return state.filter((book) => book.id !== action.payload);
        default:
            return state;
    }
}

export function useBooks() {
    const [books, dispatch] = useReducer(booksReducer, []);

    useEffect(() => {
        const storedBooks = localStorage.getItem("books");

        if (storedBooks) {
            dispatch({ type: "SET_BOOKS", payload: JSON.parse(storedBooks) });
        }
    }, []);

    function addBook(book: Book) {
        const updatedBooks = [...books, book];
        dispatch({ type: "ADD_BOOK", payload: book });
        localStorage.setItem("books", JSON.stringify(updatedBooks));
    }

    function deleteBook(id: string) {
        const updatedBooks = books.filter((b) => b.id !== id);
        dispatch({ type: "DELETE_BOOK", payload: id });
        localStorage.setItem("books", JSON.stringify(updatedBooks));
    }

    return { books, addBook, deleteBook };
}
