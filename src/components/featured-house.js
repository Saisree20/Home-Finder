import React from "react";
import House from "./house";

const FeaturedHouse = ({ house }) => {
  console.log("In House component-->", house);
  return (
    <div>
      <h4 className="text-center">Featured house</h4>
      <House house={house} />
    </div>
  );
};

export default FeaturedHouse;
