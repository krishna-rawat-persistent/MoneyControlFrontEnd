import React, { useState } from "react";
import Types from "../Types/Types";
import Duration from "../Duration/Duration";
import Submit from "../Submit/Submit";
import SubTypes from "../Types/SubTypes/SubTypes";
import { equity } from "../Types/SubTypes/SubTypeList";

function Common() {
  const [stockType, setStockType] = useState("EQUITY");
  const [stockSubType, setSubType] = useState(equity);

  const updateSelection = (type, data) => {
    setStockType(type);
    setSubType(data);
  };

  return (
    <div>
      <Types changeSelection={updateSelection} />
      <SubTypes type={stockType} data={stockSubType} />
      <Duration />
      <Submit />
    </div>
  );
}

export default Common;
