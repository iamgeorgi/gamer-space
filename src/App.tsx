import "./App.css";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Main from "./components/Main";
import useGames from "./hooks/useGames";

function App() {
  const { data, queryParams, setQueryParams, error, isLoading } = useGames();


  function onSearch(value: string): void {
    setQueryParams({ ...queryParams, search: value })
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
          <NavBar onSearch={onSearch} />
        </GridItem>
        <Box hideBelow="lg">
          <GridItem area="aside" padding="10px">
            <SideBar onGenreSelect={(id) => setQueryParams({ ...queryParams, genres: id })} />
          </GridItem>
        </Box>
        <GridItem area="main">
          <Main games={data} queryParams={queryParams} setQueryParams={setQueryParams} error={error} isLoading={isLoading} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
