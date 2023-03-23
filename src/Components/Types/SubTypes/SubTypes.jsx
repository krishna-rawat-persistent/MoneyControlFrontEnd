import React from "react";

function SubTypes({ type, data }) {
  return (
    <div className="equitytype-container-main">
      <div className="equitytype-header">{type}</div>
      <div className="equitytype-content">
        {data.map((item) => (
          <div>
            <label>
              <input type="radio" name="equity-type" className="radio-button" />
              {item.name}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SubTypes;
