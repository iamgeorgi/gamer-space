import { Heading, HStack } from "@chakra-ui/react";
import GameGrid from "./GameGrid";
import GameFilters from "./GameFilters";
import useGames from "@/hooks/useGames";

function Main() {
  const { games, queryParams, setQueryParams } = useGames();

  return (
    <>
      <Heading size="5xl">Games</Heading>
      {/* Platform Filter */}
      <HStack>
        <GameFilters queryParams={queryParams} setQueryParams={setQueryParams} />
      </HStack>

      {/* Game Grid */}
      <GameGrid games={games} />
    </>
  );
}

export default Main;
