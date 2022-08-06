import "./App.css";
import { AppProvider } from "./contexts/CocktailContext";
import AppRouter from "./router/AppRouter";
function App() {
  return (
    <div>
      <AppProvider>
        <AppRouter />
      </AppProvider>
    </div>
  );
}

export default App;
