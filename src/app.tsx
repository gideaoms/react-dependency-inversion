import { Cities } from "./component/cities.tsx";
import { Provider } from "./context/city.tsx";
import { CityRepository } from "./external/repository/city.ts";

const cityRepository = new CityRepository();

export default function App() {
  return (
    <Provider value={{ cityRepository }}>
      <div>
        <h1>Cities</h1>
        <Cities />
      </div>
    </Provider>
  );
}
