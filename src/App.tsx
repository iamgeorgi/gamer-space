import "./App.css";
import { Box, Grid, GridItem, Heading } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Main from "./components/Main";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "250px 1fr",
        }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <Box hideBelow="lg">
          <GridItem area="aside" padding="10px">
            <SideBar />
          </GridItem>
        </Box>
        <GridItem area="main">
          <Main />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
