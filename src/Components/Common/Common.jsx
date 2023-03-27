import React, { useState } from "react";
import Types from "../Types/Types";
import Duration from "../Duration/Duration";
import Submit from "../Submit/Submit";
import SubTypes from "../Types/SubTypes/SubTypes";
import { equity } from "../Types/SubTypes/SubTypeList";
import Table from "../Table/Table";

function Common() {
  const [stockType, setStockType] = useState("EQUITY");
  const [stockSubType, setSubType] = useState(equity);
  const [submit, setSubmit] = useState(1);
  const [url, setUrl] = useState("");
  const [duration, setDuration] = useState("");

  const updateSubmit = (bit) => {
    setSubmit(bit);
  };
  const updateUrl = (val) => {
    setUrl(val);
  };
  const updateDuration = (val) => {
    setDuration(val);
  };

  const updateSelection = (type, data) => {
    setStockType(type);
    setSubType(data);
  };

  console.log(url, ":", duration);

  return (
    <div>
      {submit ? (
        <>
          <Types changeSelection={updateSelection} />
          <SubTypes type={stockType} data={stockSubType} getUrl={updateUrl} />
          <Duration getDuration={updateDuration} durationVal={duration} />
          <Submit
            toggleSubmit={updateSubmit}
            name="SUBMIT"
            bit={submit}
            urlVal={url}
            durationVal={duration}
          />
        </>
      ) : (
        <>
          <Table urlValue={url} durationValue={duration} />
          <Submit
            toggleSubmit={updateSubmit}
            name="Go Back"
            bit={submit}
            urlVal={updateUrl}
            durationVal={updateDuration}
          />
        </>
      )}
    </div>
  );
}

export default Common;
