import { Suspense } from "react";
import { getPlanetsAction } from "./actions/get-planet.action";
import Planets from "./pages/Planets";
import ErrorBoundary from "./shared/ErrorBoundary";

function App() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Planetas del Sistema Solar</h1>
      <ErrorBoundary fallback={<p>Ha ocurrido un error inesperado.</p>}>
        <Suspense fallback={<p>Cargando ...</p>}>
          <Planets getPlanets={getPlanetsAction()} />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
