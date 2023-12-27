import React, { useEffect, useState } from "react";
import logo from "../assets/house.jpg";
import FilteredData from "./FilteredData";
const Header = () => {
  const [houseList, setHouseList] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch("houses.json");
      const data = await res.json();
      setHouseList(data);
    } catch (error) {
      console.error("Error occured while fetching the data");
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(houseList, "in side the Header.js");
  return (
    <div className="row p-2 mb-2 bg-dark bg-gradient text-light">
      <div className="col-1 m-auto ">
        <img src={logo} alt="Logo" width={60} className="rounded-circle" />
      </div>
      <div className="col-5 m-auto">
        <i style={{ fontSize: "28px" }}>Provides homes for rent.</i>
      </div>

      <div className="col-2 m-auto">
        <FilteredData houseList={houseList} />
      </div>
    </div>
  );
};

export default Header;
