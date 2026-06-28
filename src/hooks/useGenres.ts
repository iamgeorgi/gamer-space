import genresService from "@/services/genres-service";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";

interface GenresResult {
  id: number;
  name: string;
  image_background: string;
}

interface Genres {
  id: number;
  name: string;
  image: string;
}

function useGenres() {
  const [genres, setGenres] = useState<Genres[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const { request, cancel } = genresService.getAll<GenresResult>();
    request
      .then((res) => {
        const genresCardData = res.data.results.map((genres) => {
          return {
            id: genres.id,
            name: genres.name,
            image: genres.image_background,
          };
        });
        setGenres(genresCardData);
      })
      .catch((error) => {
        if (error instanceof CanceledError) {
          return;
        }
        setError(error.message);
      });

    return () => cancel();
  }, []);

  return { genres };
}

export default useGenres;
