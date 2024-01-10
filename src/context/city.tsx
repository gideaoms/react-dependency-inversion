import React, { createContext } from "react";
import { CityRepository } from "../core/repository/city";

const Context = createContext<{ cityRepository: CityRepository }>(null!);

export const Provider = Context.Provider;

export function useContext() {
  return React.useContext(Context);
}
