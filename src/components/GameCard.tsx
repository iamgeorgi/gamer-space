import { Badge, Card, HStack, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import type { GameCard } from "@/services/games-service";
import getCroppedImageUrl from "@/utils/image-url";

interface Props {
  game: GameCard;
}

function GameCard({ game }: Props) {
  return (
    <Card.Root key={game.id} maxW="sm">
      <Image src={getCroppedImageUrl(game.background_image)} alt={game.name} />
      <Card.Body gap="2">
        <HStack justifyContent="space-between">
          <PlatformIconList
            platforms={game.parent_platforms?.map((p) => p.platform)}
          />
          <Badge px="13px" py="5px" colorPalette="green">
            {game.metacritic}
          </Badge>
        </HStack>
        <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
          {game.name}
        </Text>
      </Card.Body>
      <Card.Footer gap="2"></Card.Footer>
    </Card.Root>
  );
}

export default GameCard;
