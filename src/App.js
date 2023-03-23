import Types from "./Components/Types/Types";
import EquityTypes from "./Components/SubTypes/Equity/EquityTypes";
import "./App.css";
import Duration from "./Components/Duration/Duration";
import Submit from "./Components/Submit/Submit";
import Table from "./Components/Table/Table";


function App() {
   
  return (
    <div className="main-container">
      {/* <Types />
      <EquityTypes />
      <Duration />
      <Submit /> */
      <Table></Table>
      }
    </div>
  );
}

export default App;
