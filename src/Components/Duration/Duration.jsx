import React from "react";
import { durationList } from "./DurationList";

function Duration({ getDuration, durationVal }) {
  const togglePreference = (e) => {
    const val = e.target.value;
    const idx = durationVal.indexOf(val);
    if (idx === -1) {
      durationVal += val + ",";
    } else {
      durationVal = durationVal.replace(val + ",", "");
    }
    getDuration(durationVal);
  };

  return (
    <div className="duration-container-main">
      <div className="duration-header">DURATION</div>
      <div className="duration-content">
        {durationList.map((item) => (
          <div className="checkbox-div" key={item.id}>
            <input
              type="checkbox"
              name="duration"
              className="duration-checkbox"
              id={"checkbox" + item.id}
              value={item.value}
              onChange={togglePreference}
            />

            <label htmlFor={"checkbox" + item.id} className="duration-label">
              {item.name}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Duration;
