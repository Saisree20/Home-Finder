import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SelectedData = () => {
  const { selection } = useParams();
  console.log(" Yayy Selected data-->", selection);
  const [houseList, setHouseList] = useState([]);
  const [hover, setOnHover] = useState(false);
  const currecncy = {
    Australia: "A$",
    India: "₹",
    USA: "$",
    UK: "£",
    Switzerland: "CHF",
  };
  const fetchData = async () => {
    try {
      const res = await fetch("/houses.json");
      const data = await res.json();

      setHouseList(data);
    } catch (error) {
      console.error("Error occured while fetching the data");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!houseList) {
    return <div>Loading...</div>;
  }

  const handleHover = (e, index) => {
    setOnHover(index);
  };
  return (
    <div>
      <div>
        <div>
          <table
            align="center"
            className="bg bg-light table table-hover"
            width="80%"
          >
            <thead align="center">
              <th>
                <td style={{ background: "transparent" }}>Address</td>
              </th>
              <th>
                <td style={{ background: "transparent" }}>Price</td>
              </th>
            </thead>
            <tbody align="center">
              {houseList
                .filter((x) => x.country === selection)
                .map((val, index) => {
                  return (
                    <tr>
                      <td
                        key={index}
                        onMouseLeave={(e) => setOnHover(false)}
                        onMouseOver={(e) => handleHover(e, index)}
                        title="Tooltip on top"
                      >
                        {val?.address}
                      </td>
                      <td key={index}>
                        {val?.price + "   " + currecncy[val?.country]}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          {hover !== false && (
            <div
              className="bg bg-light "
              style={{
                overflow: "auto",
                position: "fixed",
                top: "30%",
                left: "30%",
                transform: "translate(-10%, -30%)",

                padding: "1rem",
                borderRadius: "5px",
                boxShadow: "0 3rem 5rem rgba(0, 0, 0, 0.3)",
                zIndex: "10",
                margin: "auto",
                alignItems: "center",

                backgroundColor: "black",
                backdropFilter: "blur(10px)",
                overflow: "auto",
              }}
            >
              <h5>Country: {houseList[hover].country}</h5>
              <h5>Description: {houseList[hover].description}</h5>
              <h5>Address: {houseList[hover].address}</h5>
              <h5>
                Price:
                {houseList[hover].price +
                  "   " +
                  currecncy[houseList[hover].country]}
              </h5>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SelectedData;
