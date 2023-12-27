import React from "react";
import { useParams } from "react-router-dom";

const DemoParams = () => {
  const { selection } = useParams();
  return (
    <div>
      <h1>You selected {selection}</h1>
    </div>
  );
};

export default DemoParams;
