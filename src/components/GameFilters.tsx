import usePlatforms from "@/hooks/usePlatforms";
import { createListCollection, For, Portal, Select } from "@chakra-ui/react";

const orderByList = createListCollection({
  items: [
    { label: "Relevance", value: "updated" },
    { label: "Date added", value: "-added" },
    { label: "Name", value: "name" },
    { label: "Release date", value: "created" },
    { label: "Popularity", value: "metacritic" },
    { label: "Average rating", value: "rating" },
  ],
});

interface Props {
    onFilterChange: (value: string, queryName: string) => void,
}

function GameFilters({ onFilterChange } : Props) {
  const { platforms } = usePlatforms();
  const platformsList = createListCollection({ items: platforms });

  return (
    <For
      each={[
        { id: 1, name: "Platforms", slug: 'platforms', list: platformsList },
        { id: 2, name: "Order By:", slug: 'ordering', list: orderByList },
      ]}
    >
      {(filter) => (
        <Select.Root
          key={filter.id}
          collection={filter.list}
          variant="subtle"
          size="md"
          width="320px"
          onValueChange={(value) => onFilterChange(value.value[0], filter.slug)}
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
