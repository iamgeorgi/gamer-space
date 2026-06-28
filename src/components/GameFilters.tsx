import usePlatforms from "@/hooks/usePlatforms";
import type { GameQuery } from "@/services/http-service";
import { createListCollection, For, Portal, Select } from "@chakra-ui/react";

const orderByList = createListCollection({
  items: [
    { label: "Relevance", value: "updated" },
    { label: "Date added", value: "added" },
    { label: "Name", value: "name" },
    { label: "Release date", value: "created" },
    { label: "Popularity", value: "metacritic" },
    { label: "Average rating", value: "rating" },
  ],
});

interface Props {
    queryParams: GameQuery,
    setQueryParams: React.Dispatch<React.SetStateAction<GameQuery>>;
}

function GameFilters({ queryParams, setQueryParams} : Props) {
  const { platforms } = usePlatforms();
  const platformsList = createListCollection({ items: platforms });

  return (
    <For
      each={[
        { id: 1, name: "Platforms", queryName: 'platforms', list: platformsList },
        { id: 2, name: "Order By:", queryName: 'ordering', list: orderByList },
      ]}
    >
      {(filter) => (
        <Select.Root
          key={filter.id}
          collection={filter.list}
          variant="subtle"
          size="md"
          width="320px"
          onValueChange={(e) => setQueryParams({ ...queryParams, [filter.queryName]: e.value[0] })}
        >
          <Select.HiddenSelect />
          <Select.Control>
            <Select.Trigger>
              <Select.ValueText placeholder={filter.name} />
            </Select.Trigger>
            <Select.IndicatorGroup>
              <Select.Indicator />
            </Select.IndicatorGroup>
          </Select.Control>
          <Portal>
            <Select.Positioner>
              <Select.Content>
                {filter.list.items.map((item) => (
                  <Select.Item item={item} key={item.value}>
                    {item.label}
                    <Select.ItemIndicator />
                  </Select.Item>
                ))}
              </Select.Content>
            </Select.Positioner>
          </Portal>
        </Select.Root>
      )}
    </For>
  );
}

export default GameFilters;
