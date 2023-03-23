import React from "react";

function HybridTypes() {
  return (
    <div className="hybridtype-container-main">
      <div className="hybridtype-header">EQUITY</div>
      <div className="hybridtype-content">
        {hybridTypes.map((type) => (
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

export default HybridTypes;
