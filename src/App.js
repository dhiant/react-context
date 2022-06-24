import "./App.css";
import EmployeeList from "./components/EmployeeList";
import { GlobalProvider } from "./context/GlobalState";
import AddEmployee from "./components/AddEmployee";

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <EmployeeList />
        <AddEmployee />
      </div>
    </GlobalProvider>
  );
}

export default App;
