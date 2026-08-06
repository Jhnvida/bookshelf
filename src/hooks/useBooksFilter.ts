import { useState } from "react";
import type { Book } from "../types";

export function useBooksFilter(books: Book[]) {
    let filteredBooks = books;

    const [searchText, setSearchText] = useState("");
    const [selectedGenre, setSelectedGenre] = useState("Todos");

    if (searchText !== "") {
        filteredBooks = filteredBooks.filter((book) => book.title.toLowerCase().includes(searchText.toLowerCase()));
    }

    if (selectedGenre !== "Todos") {
        filteredBooks = filteredBooks.filter((book) => book.genre === selectedGenre);
    }

    return { selectedGenre, setSelectedGenre, searchText, setSearchText, filteredBooks };
}
