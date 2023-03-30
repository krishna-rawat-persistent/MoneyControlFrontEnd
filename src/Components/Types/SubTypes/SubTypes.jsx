import React from "react";

function SubTypes({ type, data, getUrl, urlVal }) {
  const toggleSubtype = (e) => {
    const subtype = e.target.value;
    const idx = urlVal.indexOf(subtype);
    if (idx === -1) {
      urlVal += subtype + ",";
    } else {
      urlVal = urlVal.replace(type + ",", "");
    }
    getUrl(urlVal);
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
              className="subtypes-checkbox"
              id={item.id}
              value={item.value}
              onChange={toggleSubtype}
            />
            <label htmlFor={item.id} className="subtypes-label">
              {item.name}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SubTypes;
