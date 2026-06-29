import { Input, InputGroup } from "@chakra-ui/react";
import { useRef } from "react";
import { LuSearch } from "react-icons/lu";

interface Props {
    onSearch: (value: string) => void;
}

function SearchBar({ onSearch }: Props) {
  const searchRef = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (searchRef.current?.value) {
            onSearch(searchRef.current.value)
        }
      }}
    >
      <InputGroup flex="1" startElement={<LuSearch />}>
        <Input ref={searchRef} placeholder="Search games..." variant="subtle" />
      </InputGroup>
    </form>
  );
}

export default SearchBar;
