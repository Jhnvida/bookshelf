import { createContext, useContext, type ReactNode } from "react";
import { useBooks } from "../hooks/useBooks";
import { useBooksFilter } from "../hooks/useBooksFilter";
import type { Book } from "../types";

interface BooksContextData {
    books: Book[];
    addBook: (book: Book) => void;
    deleteBook: (id: string) => void;
    selectedGenre: string;
    setSelectedGenre: (genre: string) => void;
    filteredBooks: Book[];
    searchText: string;
    setSearchText: (text: string) => void;
}

const BooksContext = createContext<BooksContextData>({} as BooksContextData);

interface BooksProviderProps {
    children: ReactNode;
}

export function BooksProvider({ children }: BooksProviderProps) {
    const { books, addBook, deleteBook } = useBooks();
    const { selectedGenre, setSelectedGenre, filteredBooks, searchText, setSearchText } = useBooksFilter(books);

    return (
        <BooksContext.Provider
            value={{
                books,
                addBook,
                deleteBook,
                selectedGenre,
                setSelectedGenre,
                filteredBooks,
                searchText,
                setSearchText,
            }}
        >
            {children}
        </BooksContext.Provider>
    );
}

export function useBooksContext() {
    return useContext(BooksContext);
}
