import React from "react";

function SubTypes({ type, data, getUrl }) {
  const handleChange = (e) => {
    getUrl(e.target.value);
  };

  return (
    <div className="subtype-container-main">
      <div className="subtype-header">{type}</div>
      <div className="subtype-content">
        {data.map((item) => (
          <div className="radio-div" key={item.id}>
            <input
              type="checkbox"
              name="stocks-type"
              className="radio-button"
              id={item.id}
              value={item.value}
              onChange={handleChange}
            />
            <label htmlFor={item.id} className="radio-label">
              {item.name}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SubTypes;
