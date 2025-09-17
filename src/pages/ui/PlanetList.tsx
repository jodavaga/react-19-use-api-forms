import { FC, useState } from "react";
import { Planet } from "../../interfaces/planet.interface";
import { updatePlanetAction } from "../../actions/update-planet.action";

interface Props {
  planets: Planet[];
}

export const PlanetList: FC<Props> = ({ planets }: Props) => {
  const [originalPlanets, setOriginalPlanets] = useState(planets);

  const handlePlanetUpdate = async (planet: Planet) => {
    planet.name = planet.name.toUpperCase();
    const newPlanet = await updatePlanetAction(planet);
    console.log("🚀 ~ Updated:", newPlanet);

    setOriginalPlanets((prevPlanets) => {
      return prevPlanets.map((current) => {
        return current.id === planet.id ? newPlanet : current;
      });
    });
  };
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 animate-fadeIn">
      {originalPlanets.map((planet) => (
        <div key={planet.id} className="p-4 bg-gray-100 rounded shadow">
          <h2 className="text-xl font-semibold">{planet.name}</h2>
          <p className="text-gray-700">{planet.type}</p>
          <p className="text-gray-700">{planet.distanceFromSun}</p>
          <br />
          <button
            className="bg-blue-500 text-white p-2 rounded w-full"
            onClick={() => handlePlanetUpdate(planet)}
          >
            Actualizar
          </button>
        </div>
      ))}
    </div>
  );
};
