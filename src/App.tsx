import styles from "./App.module.css";
import Filters from "./components/Filters";
import Header from "./components/Header";

export default function App() {
    return (
        <>
            <Header />

            <main className={styles.main}>
                <Filters />
                <h1>Batata</h1>
            </main>
        </>
    );
}
