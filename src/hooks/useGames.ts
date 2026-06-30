import gamesService, { type GameCard } from "@/services/games-service";
import useData from "./useData";
import type { GameQuery } from "@/services/http-service";

function useGames(queryParams?: GameQuery) {
  return useData<GameCard>(gamesService, { params: queryParams }, [queryParams]);
}

export default useGames;
