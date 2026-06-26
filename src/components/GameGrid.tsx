import { Card, SimpleGrid, Image, Text, Button, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import gamesService, { type GameCard } from "../services/games-service";
import { CanceledError } from "axios";

function GameGrid() {
  const [games, setGames] = useState<GameCard[]>();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const { request, cancel } = gamesService.getAll<GameCard>();
    request
      .then((res) => {
        const gamesCardData = res.data.results.map((game) => {
          return {
            id: game.id,
            name: game.name,
            background_image: game.background_image,
            metacritic: game.metacritic,
            stores: [...game.stores],
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
  }, []);

  return (
    <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} gap={6}>
      {error && <Text bg="bg.error">{error}</Text>}
      {isLoading && <Spinner />}
      {games?.map((game) => (
        <Card.Root key={game.id} maxW="sm" overflow="hidden">
          <Image src={game.background_image} alt={game.name} />
          <Card.Body gap="2">
            <Card.Description>{game.metacritic}</Card.Description>
            <Text
              textStyle="2xl"
              fontWeight="medium"
              letterSpacing="tight"
              mt="2"
            >
              {game.name}
            </Text>
          </Card.Body>
          <Card.Footer gap="2"></Card.Footer>
        </Card.Root>
      ))}
    </SimpleGrid>
  );
}

export default GameGrid;
