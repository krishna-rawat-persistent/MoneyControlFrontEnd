import React from "react";
import { typesList } from "./TypesList";

function Types() {
  return (
    <div className="types-container-main">
      <div className="types-list-container">
        {typesList.map((item) => (
          <button className="types">{item.name}</button>
        ))}
      </div>
    </div>
  );
}

export default Types;
