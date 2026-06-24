import "./App.css";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <Grid
        templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <Box hideBelow="lg">
          <GridItem area="aside" bg="gold">
            Aside
          </GridItem>
        </Box>
        <GridItem area="main" bg="dodgerblue">
          Main
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
