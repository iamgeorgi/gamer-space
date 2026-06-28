import { Button, Heading, VStack, Image, Text } from "@chakra-ui/react";
import useGenres from "@/hooks/useGenres";

interface Props {
  onGenreSelect: (id: number, queryName: string) => void;
}

function SideBar({ onGenreSelect }: Props) {
  const { genres } = useGenres();

  return (
    <VStack align="start">
      <Heading size="3xl">Genres</Heading>
      {genres.map((genre) => (
        <Button
          key={genre.id}
          variant="ghost"
          justifyContent="flex-start"
          onClick={() => onGenreSelect(genre.id, 'genres')}
        >
          <Image
            src={genre.image}
            boxSize="40px"
            borderRadius={8}
            objectFit="cover"
          />
          <Text>{genre.name}</Text>
        </Button>
      ))}
    </VStack>
  );
}

export default SideBar;
