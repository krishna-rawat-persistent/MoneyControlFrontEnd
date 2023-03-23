import React from "react";
import { durationList } from "./DurationList";

function Duration() {
  return (
    <div className="duration-container-main">
      <div className="duration-header">DURATION</div>
      <div className="duration-content">
        {durationList.map((item) => (
          <div>
            <label>
              <input type="radio" className="duration-radio" />
              {item.name}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Duration;
