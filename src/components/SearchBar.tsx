import { Input, InputGroup } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";

function SearchBar() {
  return (
    <InputGroup flex="1" startElement={<LuSearch />}>
      <Input placeholder="Search games..." variant="subtle" />
    </InputGroup>
  );
}

export default SearchBar;
