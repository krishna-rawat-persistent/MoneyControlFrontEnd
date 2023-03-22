import Types from "./Components/Types/Types";
import EquityTypes from "./Components/SubTypes/Equity/EquityTypes";
import "./App.css";
import Duration from "./Components/Duration/Duration";
import Submit from "./Components/Submit/Submit";

function App() {
  return (
    <div className="main-container">
      <Types />
      <EquityTypes />
      <Duration />
      <Submit />
    </div>
  );
}

export default App;
