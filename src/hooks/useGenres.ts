import genresService from "@/services/genres-service";
import useData from "./useData";

interface Genres {
  id: number;
  name: string;
  image_background: string;
}

function useGenres() {
  return useData<Genres>(genresService);
}

export default useGenres;
