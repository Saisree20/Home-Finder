import React from "react";

const House = ({ house }) => {
  const fetchHouse = house ? house : null;
  console.log("In House component-->fetched", fetchHouse);
  /*  const currecncy = {
    Australia: "&#36;",
    India: "&#8377;",
    USA: "&#36;",
    UK: "&#163;",
    Switzerland: "&#67;&#72;&#70;",
  };
*/
  const currecncy = {
    Australia: "A$",
    India: "₹",
    USA: "$",
    UK: "£",
    Switzerland: "CHF",
  };
  return (
    <div className="ms-5 mt-3">
      <p> {house?.address}</p>
      <p>{house?.country}</p>
      <div className="container row d-flex flex-row">
        <div className="col-md-3 ms-5 me-5 bd-highlight mb-3 p-0 bg-light ">
          <img
            className="object-fit-fill border "
            src={house?.photo}
            alt={house?.photo}
          />
        </div>
        <div className="col-6 bd-highlight mb-3 ms-5 p-5 bg-light">
          <p>{house?.description}</p>
          <p>
            {house?.price + " " + currecncy[house?.country]}
            {/* <span
              dangerouslySetInnerHTML={{
                __html: currecncy[house?.country],
              }}
            ></span> */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default House;
