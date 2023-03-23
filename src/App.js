import "./App.css";
import Duration from "./Components/Duration/Duration";
import Submit from "./Components/Submit/Submit";
import Table from "./Components/Table/Table";


import Common from "./Components/Common/Common";


function App() {
   
  return (
    <div className="main-container">

      {/* <Types />
      <EquityTypes />
      <Duration />
      <Submit /> */
      <Table></Table>
      }

      <Common />

    </div>
  );
}

export default App;
