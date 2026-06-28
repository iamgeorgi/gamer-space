import { Heading, HStack } from "@chakra-ui/react";
import GameGrid from "./GameGrid";
import GameFilters from "./GameFilters";
import type { GameQuery } from "@/services/http-service";
import type { GameCard } from "@/services/games-service";

interface Props {
  games: GameCard[];
  queryParams: GameQuery;
  setQueryParams: React.Dispatch<React.SetStateAction<GameQuery>>;
}

function Main({ games, queryParams, setQueryParams }: Props) {

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
      <GameGrid games={games} />
    </>
  );
}

export default Main;
