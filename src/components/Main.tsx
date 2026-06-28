import { Heading, HStack } from "@chakra-ui/react";
import GameGrid from "./GameGrid";
import GameFilters from "./GameFilters";
import { useState } from "react";
import useGames from "@/hooks/useGames";
import usePlatforms from "@/hooks/usePlatforms";

function Main() {
  const [category, setCategory] = useState<{name: string, value: string}>({ name: '', value: ''});

  const { games } = useGames();
  const { platforms } = usePlatforms();

  const handleCategory = (e: any, filter: any) => {
    console.log('e >>>', e);
    console.log('filter >>>', filter);
    setCategory({ name: filter.name, value: e.value[0] });
  };

  console.log(platforms);

  return (
    <>
      <Heading size="5xl">Games</Heading>
      {/* Platform Filter */}
      <HStack>
        <GameFilters onSelectCategory={handleCategory} />
      </HStack>

      {/* Game Grid */}
      <GameGrid games={games} />
    </>
  );
}

export default Main;
