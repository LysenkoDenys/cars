import React from "react";

const Price = (props) => {
  // console.log("price render"); //
  return (
    <p>
      {new Intl.NumberFormat("eu-EN", {
        style: "currency",
        currency: "USD",
      }).format(props.price)}
    </p>
  );
};

export default React.memo(Price);
