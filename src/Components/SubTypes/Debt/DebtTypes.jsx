import React from "react";
import { debtTypes } from "./Types";

function DebtTypes() {
  return (
    <div className="debttype-container-main">
      <div className="debttype-header">DEBT</div>
      <div className="debttype-content">
        {debtTypes.map((type) => (
          <div>
            <label>
              <input type="radio" name="debt-type" className="radio-button" />
              {type.name}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DebtTypes;
