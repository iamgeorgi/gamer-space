import { Heading, HStack } from "@chakra-ui/react";
import GameGrid from "./GameGrid";
import GameFilters from "./GameFilters";
import { useState } from "react";
import useGames from "@/hooks/useGames";

function Main() {
  const [category, setCategory] = useState([
    { name: "platforms", value: "" },
    { name: "order_by:", value: "" },
  ]);

  const { games } = useGames();

  const isCategorySelected = category.some(item => item.value);
  
  const visibleGames = isCategorySelected
  ? games.filter((game) =>
      game.platforms.some((p) =>
        p.platform.slug.includes(category[0].value)
      )
    )
  : games;

  return (
    <>
      <Heading size="5xl">Games</Heading>
      {/* Platform Filter */}
      <HStack>
        <GameFilters
          onSelectCategory={(e, filter) => 
            setCategory(
              category.map((el) =>
                el.name === filter.name ? { ...el, value: e.value[0] } : el,
              ),
            )
          }
        />
      </HStack>

      {/* Game Grid */}
      <GameGrid games={visibleGames} />
    </>
  );
}

export default Main;
