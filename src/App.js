import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Table from "./Components/Table/Table";

import Common from "./Components/Common/Common";

function App() {
  return (
    <div className="main-container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Common />} />
          <Route path="/data" element={<Table />} />
        </Routes>
      </BrowserRouter>
      {/* <Table/> */}
      {/* <Common /> */}
    </div>
  );
}

export default App;
