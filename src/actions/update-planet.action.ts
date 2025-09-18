import { planetsApi } from "../api/planetsApi";
import { Planet } from "../interfaces/planet.interface";

export const updatePlanetAction = async (planet: Planet) => {
  try {
    const response = await planetsApi.patch<Planet>(`/${planet.id}`, planet);
    console.log("Updated!");
    return response.data;
  } catch (err) {
    return Promise.reject(err);
  }
};
