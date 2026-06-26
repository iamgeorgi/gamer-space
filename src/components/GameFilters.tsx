import { createListCollection, For, Portal, Select } from "@chakra-ui/react";

const platformsList = createListCollection({
  items: [
    { label: "PC", value: "pc" },
    { label: "PlayStation", value: "playstation" },
    { label: "Xbox", value: "xbox" },
    { label: "iOS", value: "ios" },
    { label: "Android", value: "android" },
    { label: "Apple Macintosh", value: "apple" },
    { label: "Linux", value: "linux" },
  ],
});

const orderByList = createListCollection({
  items: [
    { label: "Relevance", value: "relevance" },
    { label: "Date added", value: "date_added" },
    { label: "Name", value: "name" },
    { label: "Release date", value: "release_date" },
    { label: "Popularity", value: "popularity" },
    { label: "Average rating", value: "average_rating" },
  ],
});

interface Props {
    onSelectCategory: (e: any, filter: any) => void;
}

function GameFilters({ onSelectCategory }: Props) {

  return (
    <For
      each={[
        { id: 1, name: "Platforms", list: platformsList },
        { id: 2, name: "Order By:", list: orderByList },
      ]}
    >
      {(filter) => (
        <Select.Root
          key={filter.id}
          collection={filter.list}
          variant="subtle"
          size="md"
          width="320px"
          onValueChange={(e) => onSelectCategory(e, filter)}
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
