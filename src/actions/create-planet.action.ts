import { planetsApi } from "../api/planetsApi";
import { Planet } from "../interfaces/planet.interface";

export const createPlanetAction = async (
  planet: Partial<Planet>
): Promise<Planet> => {
  try {
    const res = await planetsApi.post<Planet>("/", planet);
    return res.data;
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
};
