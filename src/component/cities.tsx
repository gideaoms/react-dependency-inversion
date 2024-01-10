import { useEffect, useState } from "react";
import { useContext } from "../context/city";
import { CityModel } from "../core/model/city";

export function Cities() {
  const [cities, setCities] = useState<CityModel[]>([]);
  const { cityRepository } = useContext();

  async function load() {
    const cities = await cityRepository.findMany();
    setCities(cities);
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <ul>
      {cities.map((city) => (
        <li key={city.id}>{city.name}</li>
      ))}
    </ul>
  );
}
