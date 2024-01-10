import { CityRepository as ICityRepository } from "../../core/repository/city";

export class CityRepository implements ICityRepository {
  async findMany() {
    // here you could call an api using axios
    return [
      { id: "1", name: "City 1" },
      { id: "2", name: "City 2" },
      { id: "3", name: "City 3" },
    ];
  }
}
