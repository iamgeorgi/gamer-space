import create from "./http-service";

export interface Platform {
    id: number;
    slug: string;
}

export interface PlatformEntities {
    platform: Platform;
}

export interface GameCard {
  id: number;
  name: string
  background_image: string;
  metacritic: number;
  platforms: PlatformEntities[];
}

export default create('/games');