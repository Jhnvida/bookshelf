import { useState } from "react";

export function useCover() {
    const [image, setImage] = useState("");
    const [fetching, setFetching] = useState(false);
    const [covers, setCovers] = useState<string[]>([]);

    async function fetchCover(title: string, author: string) {
        setFetching(true);
        setImage("");
        setCovers([]);

        try {
            const query = new URLSearchParams();
            query.append("title", title);
            if (author) query.append("author", author);

            const response = await fetch(`https://openlibrary.org/search.json?${query.toString()}`);

            if (response.ok) {
                const data = await response.json();
                const cover = data.docs?.filter((doc: any) => doc.cover_i);

                if (cover && cover.length > 0) {
                    const options = cover
                        .slice(0, 10)
                        .map((doc: any) => `https://covers.openlibrary.org/b/id/${doc.cover_i}.jpg`);

                    setCovers(options);
                    setImage(options[0]);
                    return true;
                }
            }

            return false;
        } catch {
            return false;
        } finally {
            setFetching(false);
        }
    }

    return { image, setImage, covers, fetching, fetchCover };
}
