import "./App.css";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Main from "./components/Main";
import type { GameQuery } from "./services/http-service";
import { useState } from "react";

function App() {
  const [queryParams, setQueryParams] = useState<GameQuery>({});

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
          <NavBar onSearch={(value) => setQueryParams({ ...queryParams, search: value })} />
        </GridItem>
        <Box hideBelow="lg">
          <GridItem area="aside" padding="10px">
            <SideBar onGenreSelect={(id) => setQueryParams({ ...queryParams, genres: id })} />
          </GridItem>
        </Box>
        <GridItem area="main">
          <Main queryParams={queryParams} onFilterChange={(value, queryName) => setQueryParams({ ...queryParams, [queryName]: value })} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
