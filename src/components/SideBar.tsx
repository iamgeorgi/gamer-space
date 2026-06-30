import { Button, Heading, VStack, Image, Text } from "@chakra-ui/react";
import useGenres from "@/hooks/useGenres";

interface Props {
  onGenreSelect: (id: number) => void;
}

function SideBar({ onGenreSelect }: Props) {
  const { data } = useGenres();

  return (
    <VStack align="start">
      <Heading size="3xl">Genres</Heading>
      {data.map((genre) => (
        <Button
          key={genre.id}
          variant="ghost"
          justifyContent="flex-start"
          onClick={() => onGenreSelect(genre.id)}
        >
          <Image
            src={genre.image_background}
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
