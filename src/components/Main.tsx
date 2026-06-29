import { Heading, HStack } from "@chakra-ui/react";
import GameGrid from "./GameGrid";
import GameFilters from "./GameFilters";
import type { GameQuery } from "@/services/http-service";
import type { GameCard } from "@/services/games-service";

interface Props {
  games: GameCard[];
  queryParams: GameQuery;
  setQueryParams: React.Dispatch<React.SetStateAction<GameQuery>>;
  error: string,
  isLoading: boolean,
}

function Main({ games, queryParams, setQueryParams, error, isLoading }: Props) {

  return (
    <>
      <Heading size="5xl">Games</Heading>
      {/* Platform Filter */}
      <HStack>
        <GameFilters
          queryParams={queryParams}
          setQueryParams={setQueryParams}
        />
      </HStack>

      {/* Game Grid */}
      <GameGrid games={games} error={error} isLoading={isLoading} />
    </>
  );
}

export default Main;
