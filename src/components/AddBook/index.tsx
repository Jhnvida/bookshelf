import { BookPlus, ChevronDown } from "lucide-react";
import { genres_list } from "../../utils/constants";
import styles from "./styles.module.css";

interface AddBookProps {
    onCancel?: () => void;
}

export default function AddBook({ onCancel }: AddBookProps) {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Adicionar Novo Livro</h1>
                <p className={styles.subtitle}>Preencha os detalhes abaixo para adicionar um livro à sua coleção.</p>
            </div>

            <div className={styles.content}>
                <div className={styles.preview_section}>
                    <div className={styles.cover_preview}>
                        <img src="#" className={styles.preview_image} />
                    </div>
                </div>

                <form className={styles.form}>
                    <div className={styles.form_group}>
                        <label htmlFor="title" className={styles.label}>
                            Título do Livro
                        </label>

                        <input type="text" id="title" className={styles.input} placeholder="Ex: O Senhor dos Anéis" />
                    </div>

                    <div className={styles.form_group}>
                        <label htmlFor="author" className={styles.label}>
                            Autor
                        </label>

                        <input type="text" id="author" className={styles.input} placeholder="Ex: J.R.R. Tolkien" />
                    </div>

                    <div className={styles.form_row}>
                        <div className={styles.form_group}>
                            <label htmlFor="genre" className={styles.label}>
                                Gênero
                            </label>

                            <div className={styles.select_wrapper}>
                                <select id="genre" className={styles.select}>
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
                                <select id="status" className={styles.select}>
                                    <option value="">Selecione o status</option>
                                    <option value="Quero Ler">Quero Ler</option>
                                    <option value="Lendo">Lendo</option>
                                    <option value="Lido">Lido</option>
                                </select>

                                <ChevronDown className={styles.select_icon} />
                            </div>
                        </div>
                    </div>

                    <div className={styles.form_group}>
                        <label htmlFor="imageUrl" className={styles.label}>
                            URL da Capa (Opcional)
                        </label>

                        <input
                            type="url"
                            id="imageUrl"
                            className={styles.input}
                            placeholder="https://exemplo.com/capa.jpg"
                        />
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
