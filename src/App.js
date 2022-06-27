import "./App.css";
import Home from "./components/Home";
import { StudentContextProvider } from "./context/StudentContext";

function App() {
  return (
    <StudentContextProvider>
      <Home />
    </StudentContextProvider>
  );
}

export default App;
