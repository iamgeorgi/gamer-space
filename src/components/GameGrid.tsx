import useGames from "@/hooks/useGames";
import type { GameCard as GameCardType } from "@/services/games-service";
import {
  SimpleGrid,
  Text,
  Spinner,
} from "@chakra-ui/react";
import GameCard from "./GameCard";

interface Props {
    games?: GameCardType[]
}

function GameGrid({ games }: Props) {
  const { error, isLoading } = useGames();

  return (
    <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} gap={6}>
      {error && <Text bg="bg.error">{error}</Text>}
      {isLoading && <Spinner />}
      {games?.map((game) => (
        <GameCard game={game} />
      ))}
    </SimpleGrid>
  );
}

export default GameGrid;
