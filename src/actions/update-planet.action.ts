import { planetsApi } from "../api/planetsApi";
import { Planet } from "../interfaces/planet.interface";

export const delay = async () => {
  console.log("Waiting..");
  return new Promise((resolve) => setTimeout(resolve, 1000));
};

export const updatePlanetAction = async (planet: Planet) => {
  try {
    const response = await planetsApi.patch<Planet>(`/${planet.id}`, planet);
    console.log("Updated!", response.data.name);
    return response.data;
  } catch (err) {
    console.error(err);
    throw new Error(JSON.stringify(err));
  }
};
