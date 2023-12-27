import "../App.css";

import React, { useEffect, useMemo, useState } from "react";
import FeaturedHouse from "./featured-house";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import SelectedData from "./SelectedData";

function App() {
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
  console.log(houseList);
  const featuredHouse = useMemo(() => {
    if (houseList.length) {
      const randomIndex = Math.floor(Math.random() * houseList.length);
      return houseList[randomIndex];
    }
  }, [houseList]);

  return (
    <Router>
      <Header />
      {/* <DemoChild /> */}
      <Routes>
        <Route
          path="/"
          element={<FeaturedHouse house={featuredHouse} />}
        ></Route>
        <Route path="/:selection" element={<SelectedData />}></Route>

        {/* <Route path="/:selection" element={<DemoParams />}></Route> */}
      </Routes>
    </Router>
  );
}

export default App;
