import React from "react";
import { equity } from "../../Types/SubTypes";

function EquityTypes() {
  return (
    <div className="equitytype-container-main">
      <div className="equitytype-header">EQUITY</div>
      <div className="equitytype-content">
        {equity.map((type) => (
          <div>
            <label>
              <input type="radio" name="equity-type" className="radio-button" />
              {type.name}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EquityTypes;
