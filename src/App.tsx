import "./App.css";
import { Box, Grid, GridItem, Heading } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Main from "./components/Main";
import useGames from "./hooks/useGames";

function App() {
  const { games, queryParams, setQueryParams } = useGames();

  function handleGenreSelect(id: number, queryName: string): void {
    setQueryParams({ ...queryParams, [queryName]: id })
  }

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
            <SideBar onGenreSelect={handleGenreSelect} />
          </GridItem>
        </Box>
        <GridItem area="main">
          <Main games={games} queryParams={queryParams} setQueryParams={setQueryParams} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
