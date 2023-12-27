import { color } from "@mui/system";
import React, { useEffect, useState } from "react";

const DemoApp = () => {
  const [productsList, setProductsList] = useState([]);
  const fetchDetails = async () => {
    const res = await fetch("https://dummyjson.com/products/")
      .then((res) => res.json())
      .then((data) => data.products);
    console.log(res);
    setProductsList(res);
  };
  useEffect(() => {
    fetchDetails();
  }, []);
  return (
    <div>
      <table align="center" width="100%">
        <tr align="center" style={{ backgroundColor: "green", color: "white" }}>
          <td>Id</td>

          <td>Brand</td>

          <td>Price</td>

          <td>Image</td>

          <td>Rating</td>
        </tr>
        <tbody>
          {productsList.map((key, val) => {
            return (
              <tr
                key={val}
                align="center"
                style={{ border: "1px solid black" }}
              >
                <td>{key.id}</td>
                <td>{key.brand}</td>
                <td>{key.price}</td>
                <td>
                  <img
                    src={key?.images[Math.trunc(Math.random() * 3) + 1]}
                    width={50}
                    height={50}
                    alt="No Img"
                  />
                </td>
                <td>{key.rating}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DemoApp;
