import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SelectedData from "./SelectedData";

const FilteredData = ({ houseList }) => {
  console.log("Got the list of houses", houseList);
  houseList = houseList.filter((value, index, self) => {
    return self.findIndex((obj) => obj.country === value.country) === index;
  });

  const [selection, setSelection] = useState();
  const navigate = useNavigate();

  return (
    <div>
      <select
        name="country"
        id="country"
        onChange={(e) => {
          setSelection(e.target.value);
          navigate(e.target.value === "default" ? "/" : `/${e.target.value}`);
        }}
        value={selection}
        className="form-select"
      >
        <option value="default">Select Country</option>
        {houseList.map((value, index) => {
          return (
            <option
              className="text-dark bg-light"
              key={index}
              value={value.country}
            >
              {value?.country}
            </option>
          );
        })}
      </select>

      {/* </Link> */}
    </div>
  );
};

export default FilteredData;
