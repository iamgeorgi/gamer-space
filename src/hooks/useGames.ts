import type { GameCard } from "@/services/games-service";
import gamesService from "@/services/games-service";
import type { GameQuery } from "@/services/http-service";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";

function useGames() {
  const [games, setGames] = useState<GameCard[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [queryParams, setQueryParams] = useState<GameQuery>({});

  useEffect(() => {
    setIsLoading(true);
    const { request, cancel } = gamesService.getAll<GameCard>(queryParams);
    request
      .then((res) => {
        const gamesCardData = res.data.results.map((game) => {
          return {
            id: game.id,
            name: game.name,
            background_image: game.background_image,
            metacritic: game.metacritic,
            parent_platforms: [
              ...game.parent_platforms.map((platform) => {
                return { ...platform };
              }),
            ],
          };
        });
        setGames(gamesCardData);
        setIsLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) {
          return;
        }
        setError(error.message);
        setIsLoading(false);
      });

    return () => cancel();
  }, [queryParams]);



  return { games, error, isLoading, setGames, queryParams, setQueryParams };
}

export default useGames;
