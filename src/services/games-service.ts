import create from "./http-service";

export interface Store {
    id: number,
    name: string
}

export interface GameCard {
  id: number;
  name: string
  background_image: string;
  metacritic: number;
  stores: Store[];
}

export default create('/games');