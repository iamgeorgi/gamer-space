import { Heading, HStack } from "@chakra-ui/react";
import GameGrid from "./GameGrid";
import GameFilters from "./GameFilters";
import { useState } from "react";

function Main() {
  const [category, setCategory] = useState([
    { name: "Platforms", value: "" },
    { name: "Order By:", value: "" },
  ]);
  
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
      <GameGrid />
    </>
  );
}

export default Main;
