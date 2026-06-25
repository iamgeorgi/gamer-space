import { HStack, Switch } from "@chakra-ui/react";
import { useColorMode } from "./ui/color-mode";

function ColorModeSwitch() {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Switch.Root
        onCheckedChange={() => {
          toggleColorMode();
        }}
      >
        <Switch.HiddenInput />
        <Switch.Control />
        <Switch.Label>{colorMode === 'dark' ? "Dark Mode" : "Light Mode"}</Switch.Label>
      </Switch.Root>
    </HStack>
  );
}

export default ColorModeSwitch;
