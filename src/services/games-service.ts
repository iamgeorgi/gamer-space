import create from "./http-service";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface GameCard {
  id: number;
  name: string
  background_image: string;
  metacritic: number;
  parent_platforms: { platform: Platform}[];
  rating_top: number;
}

export default create('/games');