import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const DemoChild = () => {
  const navigate = useNavigate();
  const [selection, setSelection] = useState();
  return (
    <div>
      <select
        name="country"
        id="country"
        onChange={(e) => {
          e.persist();
          const selectedValue = e.target.value;
          setSelection(selectedValue);
          navigate(`/${selectedValue}`);
        }}
      >
        <option value="default">Select One</option>
        <option value="0">India</option>
        <option value="1">Switzerland</option>
        <option value="2">USA</option>
      </select>
    </div>
  );
};

export default DemoChild;
