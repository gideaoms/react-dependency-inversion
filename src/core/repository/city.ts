import { CityModel } from "../model/city";

export type CityRepository = {
  findMany: () => Promise<CityModel[]>;
};
