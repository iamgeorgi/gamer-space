import { Heading, HStack } from "@chakra-ui/react";
import GameGrid from "./GameGrid";
import GameFilters from "./GameFilters";
import type { GameQuery } from "@/services/http-service";

interface Props {
  queryParams: GameQuery;
  onFilterChange: (value: string, queryName: string) => void;
}

function Main({ queryParams, onFilterChange }: Props) {
  return (
    <>
      <Heading size="5xl">Games</Heading>
      {/* Platform Filter */}
      <HStack>
        <GameFilters onFilterChange={onFilterChange} />
      </HStack>

      {/* Game Grid */}
      <GameGrid queryParams={queryParams} />
    </>
  );
}

export default Main;
