import React from "react";
import Types from "../Types/Types";
import EquityTypes from "../SubTypes/Equity/EquityTypes";
import Duration from "../Duration/Duration";
import Submit from "../Submit/Submit";

function Common() {
  return (
    <div>
      <Types />
      <EquityTypes />
      <Duration />
      <Submit />
    </div>
  );
}

export default Common;
