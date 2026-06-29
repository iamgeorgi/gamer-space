import useGames from "@/hooks/useGames";
import type { GameCard } from "@/services/games-service";
import {
  Card,
  SimpleGrid,
  Image,
  Text,
  Spinner,
  Badge,
  HStack,
} from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";

interface Props {
    games?: GameCard[]
}

function GameGrid({ games }: Props) {
  const { error, isLoading } = useGames();

  return (
    <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} gap={6}>
      {error && <Text bg="bg.error">{error}</Text>}
      {isLoading && <Spinner />}
      {games?.map((game) => (
        <Card.Root key={game.id} maxW="sm" overflow="hidden">
          <Image src={game.background_image} alt={game.name} />
          <Card.Body gap="2">
            <HStack>
              <Badge px="13px" py="5px" colorPalette="green">{game.metacritic}</Badge>
            </HStack>
            <Text
              textStyle="2xl"
              fontWeight="medium"
              letterSpacing="tight"
              mt="2"
            >
              {game.name}
            </Text>
            <HStack>
                <PlatformIconList platforms={game.parent_platforms?.map(p => p.platform)} />
            </HStack>
          </Card.Body>
          <Card.Footer gap="2"></Card.Footer>
        </Card.Root>
      ))}
    </SimpleGrid>
  );
}

export default GameGrid;
