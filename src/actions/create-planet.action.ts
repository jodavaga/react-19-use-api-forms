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

export const createPlanetActioForm = async (
  prevState: unknown,
  queryData: FormData
): Promise<Planet> => {
  // Get all data coming from the form
  const formData = Object.fromEntries(queryData.entries());
  console.log("Adding planet using useActionState: ", { prevState, formData });
  try {
    const res = await planetsApi.post<Planet>("/", formData);
    return res.data;
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
};
