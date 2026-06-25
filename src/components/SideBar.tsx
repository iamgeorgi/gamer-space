import { Button, Heading, VStack, Image, Text } from "@chakra-ui/react";
import cyberpunk from "../assets/cyberpunk_2077.jpg";

function SideBar() {
  return (
    <VStack align="start">
      <Heading size="3xl">Genres</Heading>
      <Button variant="ghost" justifyContent="flex-start">
        <Image
          src={cyberpunk}
          boxSize="40px"
          borderRadius={8}
          objectFit="cover"
        />
        <Text>Action</Text>
      </Button>
      <Button variant="ghost" justifyContent="flex-start">
        <Image
          src={cyberpunk}
          boxSize="40px"
          borderRadius={8}
          objectFit="cover"
        />
        <Text>Adventure</Text>
      </Button>
      <Button variant="ghost" justifyContent="flex-start">
        <Image
          src={cyberpunk}
          boxSize="40px"
          borderRadius={8}
          objectFit="cover"
        />
        <Text>Strategy</Text>
      </Button>
    </VStack>
  );
}

export default SideBar;
