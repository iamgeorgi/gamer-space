import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import SearchBar from "./SearchBar";
import ColorModeSwitch from "./ColorModeSwitch";

interface Props {
    onSearch: (value: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack justifyContent='space-between' padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchBar onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
