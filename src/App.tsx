import { Suspense } from "react";
import { getPlanets } from "./actions/get-planet.action";
import Planets from "./pages/Planets";

function App() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Planetas del Sistema Solar</h1>
      <Suspense fallback={<p>Cargando ...</p>}>
        <Planets getPlanets={getPlanets()} />
      </Suspense>
    </div>
  );
}

export default App;
