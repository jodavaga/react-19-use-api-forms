import { FC, use, useState } from "react";
import { Planet } from "../interfaces/planet.interface";
import { EditPlanetForm } from "./ui/EditPlanetForm";
import { PlanetList } from "./ui/PlanetList";

interface Props {
  getPlanets: Promise<Planet[]>;
}

const Planets: FC<Props> = ({ getPlanets }: Props) => {
  const planets = use(getPlanets);
  const [currentPlanets, setCurrentPlanets] = useState<Planet[]>(planets);

  const handleAddPlanet = (planet: Planet) => {
    console.log("Planet Aded!! ", planet);
    setCurrentPlanets([...currentPlanets, planet]);
  };

  return (
    <>
      <h4 className="text-2xl font-thin mb-4">Agregar y mantener planetas</h4>
      <hr className="border-gray-300 mb-4" />
      {/* Formulario para agregar un planeta */}
      <EditPlanetForm onAddPlanet={handleAddPlanet} />

      <PlanetList planets={currentPlanets} />
    </>
  );
};

export default Planets;
