import { planetsApi } from "../api/planetsApi";
import { Planet } from "../interfaces/planet.interface";

export const getPlanetsAction = async (): Promise<Planet[]> => {
  const res = await planetsApi.get<Planet[]>("/");
  return res.data;
};
