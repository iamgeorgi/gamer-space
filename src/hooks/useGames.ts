import gamesService, { type GameCard } from "@/services/games-service";
import useData from "./useData";

function useGames() {
  return useData<GameCard>(gamesService);
}

export default useGames;
