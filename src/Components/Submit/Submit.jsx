import React from "react";

function Submit({ toggleSubmit, name, bit, urlVal, durationVal }) {
  const handleChange = (event) => {
    event.preventDefault();
    if (urlVal === "" && durationVal === "") {
      alert("Please select Fund and Duration Values to proceed");
    } else if (urlVal === "") {
      alert("Please select Fund Type");
    } else if (durationVal === "") {
      alert("Please select atleast one duration");
    } else {
      toggleSubmit(0);
    }
  };
  return (
    <div className={bit ? "submit-button-container" : "back-button-container"}>
      <button className="submit-button" onClick={handleChange}>
        {name}
      </button>
    </div>
  );
}

export default Submit;
