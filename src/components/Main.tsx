import {
  createListCollection,
  For,
  Heading,
  HStack,
  Portal,
  Select,
  Image,
  Text,
  SimpleGrid,
  Card,
  Button,
} from "@chakra-ui/react";
import GameGrid from "./GameGrid";

const frameworks = createListCollection({
  items: [
    { label: "React.js", value: "react" },
    { label: "Vue.js", value: "vue" },
    { label: "Angular", value: "angular" },
    { label: "Svelte", value: "svelte" },
  ],
});

function Main() {
  return (
    <>
      <Heading size="5xl">Games</Heading>
      {/* Platform Filter */}
      <HStack>
        <For each={["Platforms", "Order By"]}>
          {(placeholder) => (
            <Select.Root
              key={placeholder}
              collection={frameworks}
              variant="subtle"
              size="md"
              width="320px"
              onValueChange={(e) => console.log(e.value[0])}
            >
              <Select.HiddenSelect />
              <Select.Control>
                <Select.Trigger>
                  <Select.ValueText placeholder={placeholder} />
                </Select.Trigger>
                <Select.IndicatorGroup>
                  <Select.Indicator />
                </Select.IndicatorGroup>
              </Select.Control>
              <Portal>
                <Select.Positioner>
                  <Select.Content>
                    {frameworks.items.map((framework) => (
                      <Select.Item item={framework} key={framework.value}>
                        {framework.label}
                        <Select.ItemIndicator />
                      </Select.Item>
                    ))}
                  </Select.Content>
                </Select.Positioner>
              </Portal>
            </Select.Root>
          )}
        </For>
      </HStack>

      {/* Game Grid */}
      <GameGrid />
    </>
  );
}

export default Main;
