import { FC, useOptimistic, useTransition } from "react";
import { Planet } from "../../interfaces/planet.interface";
import { updatePlanetAction } from "../../actions/update-planet.action";

interface Props {
  planets: Planet[];
}

export const PlanetList: FC<Props> = ({ planets }: Props) => {
  const [isPending, startTransition] = useTransition();

  const [optimisticPlanets, setOptimisticPlanets] = useOptimistic(
    planets,
    (currentPlanets: Planet[], newPlanet: Planet) => {
      return currentPlanets.map((p) => {
        return p.id === newPlanet.id ? newPlanet : p;
      });
    }
  );

  const handlePlanetUpdate = async (planet: Planet) => {
    const updatedPlanet = { ...planet, name: planet.name.toUpperCase() };
    startTransition(async () => {
      try {
        setOptimisticPlanets(updatedPlanet);
        const serverPlanet = await updatePlanetAction(updatedPlanet);
        setOptimisticPlanets(serverPlanet);
      } catch (err) {
        console.log("reverting");
        setOptimisticPlanets(planet);
      }
    });
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 animate-fadeIn">
      {optimisticPlanets.map((planet) => (
        <div key={planet.id} className="p-4 bg-gray-100 rounded shadow">
          <h2 className="text-xl font-semibold">{planet.name}</h2>
          <p className="text-gray-700">{planet.type}</p>
          <p className="text-gray-700">{planet.distanceFromSun}</p>
          <br />
          <button
            className="bg-blue-500 text-white p-2 rounded w-full disabled:bg-gray-300"
            onClick={() => handlePlanetUpdate(planet)}
          >
            Actualizar
          </button>
        </div>
      ))}
    </div>
  );
};
