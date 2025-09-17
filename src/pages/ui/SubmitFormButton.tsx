import { useFormStatus } from "react-dom";

export const SubmitFormButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="bg-blue-500 text-white p-2 rounded flex-1 sm:flex-none disabled:bg-gray-300"
      disabled={pending}
    >
      {pending ? "Creando planeta..." : "Agregar planeta"}
    </button>
  );
};
