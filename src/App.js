import { Routes, Route } from "react-router-dom";
import "./App.css";
import { GlobalProvider } from "./context/GlobalState";
import Home from "./components/Home";
import EditEmployee from "./components/EditEmployee";
import AddEmployee from "./components/AddEmployee";

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/add" element={<AddEmployee />} />
          <Route path="/edit/:id" element={<EditEmployee />} />
        </Routes>
      </div>
    </GlobalProvider>
  );
}

export default App;
