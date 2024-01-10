import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { Cities } from "./cities";
import { Provider } from "../context/city";
import { CityRepository } from "../core/repository/city";

class FakeCityRepository implements CityRepository {
  async findMany() {
    return [
      { id: "A", name: "City A" },
      { id: "B", name: "City B" },
      { id: "C", name: "City C" },
    ];
  }
}

describe("Cities", () => {
  test("should print the list", async () => {
    const cityRepository = new FakeCityRepository();
    render(
      <Provider value={{ cityRepository }}>
        <Cities />
      </Provider>
    );
    expect(await screen.findByText(/City A/)).toBeDefined();
    expect(await screen.findByText(/City B/)).toBeDefined();
    expect(await screen.findByText(/City C/)).toBeDefined();
  });
});
