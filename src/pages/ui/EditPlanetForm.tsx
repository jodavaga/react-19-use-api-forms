import { useActionState } from "react";
import { Planet } from "../../interfaces/planet.interface";
import { createPlanetActioForm } from "../../actions/create-planet.action";
import { SubmitFormButton } from "./SubmitFormButton";

interface Props {
  onAddPlanet: (planet: Planet) => void;
}

export const EditPlanetForm = ({ onAddPlanet }: Props) => {
  const [state, formSubmitAction] = useActionState(
    async (prevState: unknown, queryData: FormData) => {
      const newPlanet = await createPlanetActioForm(prevState, queryData);
      onAddPlanet(newPlanet);
    },
    null
  );

  return (
    <form className="mb-4 flex flex-col md:flex-row" action={formSubmitAction}>
      <input
        type="text"
        placeholder="Nombre del planeta"
        className="mb-2 md:mb-0 md:mr-2 p-2 border border-gray-300 rounded flex-1"
        name="name"
        required
      />
      <input
        type="text"
        placeholder="Tipo de astro"
        className="mb-2 md:mb-0 md:mr-2 p-2 border border-gray-300 rounded flex-1"
        name="type"
      />
      <input
        type="text"
        placeholder="Distancia del sol"
        className="mb-2 md:mb-0 md:mr-2 p-2 border border-gray-300 rounded flex-1"
        name="distanceFromSun"
      />
      <SubmitFormButton />
    </form>
  );
};
