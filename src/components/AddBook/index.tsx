import { BookPlus, ChevronDown, Search } from "lucide-react";
import { type SubmitEvent } from "react";
import { useCover } from "../../hooks/useCover";
import type { Book } from "../../types";
import { genres_list } from "../../utils/constants";
import styles from "./styles.module.css";

interface AddBookProps {
    onAdd: (book: Book) => void;
    onCancel: () => void;
}

export default function AddBook({ onAdd, onCancel }: AddBookProps) {
    const { image, setImage, covers, fetching, fetchCover } = useCover();

    function handleFetchCover() {
        const title = (document.getElementById("title") as HTMLInputElement)?.value;
        const author = (document.getElementById("author") as HTMLInputElement)?.value;

        if (title) fetchCover(title, author);
    }

    function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        onAdd({
            id: crypto.randomUUID(),
            title: data.get("title") as string,
            author: data.get("author") as string,
            genre: data.get("genre") as string,
            status: data.get("status") as string,
            imageUrl: image,
        });

        onCancel();
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Adicionar Novo Livro</h1>
                <p className={styles.subtitle}>Preencha os detalhes abaixo para adicionar um livro à sua coleção.</p>
            </div>

            <div className={styles.content}>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.form_group}>
                        <label htmlFor="title" className={styles.label}>
                            Título do Livro
                        </label>

                        <input
                            type="text"
                            id="title"
                            name="title"
                            className={styles.input}
                            placeholder="Ex: O Senhor dos Anéis"
                            required
                        />
                    </div>

                    <div className={styles.form_group}>
                        <label htmlFor="author" className={styles.label}>
                            Autor
                        </label>

                        <input
                            type="text"
                            id="author"
                            name="author"
                            className={styles.input}
                            placeholder="Ex: J.R.R. Tolkien"
                            required
                        />
                    </div>

                    <div className={styles.form_row}>
                        <div className={styles.form_group}>
                            <label htmlFor="genre" className={styles.label}>
                                Gênero
                            </label>

                            <div className={styles.select_wrapper}>
                                <select id="genre" name="genre" className={styles.select} required>
                                    <option value="">Selecione um gênero</option>
                                    {genres_list.map((genre) => (
                                        <option key={genre} value={genre}>
                                            {genre}
                                        </option>
                                    ))}
                                </select>

                                <ChevronDown className={styles.select_icon} />
                            </div>
                        </div>

                        <div className={styles.form_group}>
                            <label htmlFor="status" className={styles.label}>
                                Status de Leitura
                            </label>

                            <div className={styles.select_wrapper}>
                                <select id="status" name="status" className={styles.select} required>
                                    <option value="">Selecione o status</option>
                                    <option value="Quero Ler">Quero Ler</option>
                                    <option value="Lendo">Lendo</option>
                                    <option value="Lido">Lido</option>
                                </select>

                                <ChevronDown className={styles.select_icon} />
                            </div>
                        </div>
                    </div>

                    <div className={styles.cover_section}>
                        <div className={styles.cover_header}>
                            <label className={styles.label}>Capa do Livro</label>
                            <button
                                type="button"
                                onClick={handleFetchCover}
                                className={styles.fetch_button}
                                disabled={fetching}
                            >
                                <Search size={16} />
                                {fetching ? "Buscando..." : "Buscar"}
                            </button>
                        </div>

                        <div className={styles.cover_preview_area}>
                            {covers.length > 0 && (
                                <div className={styles.thumbnails_container}>
                                    {covers.map((opt, i) => (
                                        <button
                                            type="button"
                                            key={i}
                                            onClick={() => setImage(opt)}
                                            className={`${styles.thumbnail_btn} ${image === opt ? styles.thumbnail_selected : ""}`}
                                        >
                                            <img src={opt} alt={`Opção ${i + 1}`} className={styles.thumbnail_img} />
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    <div className={styles.actions}>
                        <button type="button" className={styles.cancel_button} onClick={onCancel}>
                            Cancelar
                        </button>
                        <button type="submit" className={styles.submit_button}>
                            <BookPlus className={styles.submit_icon} />
                            Salvar Livro
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
