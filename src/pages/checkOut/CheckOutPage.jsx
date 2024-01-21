import congratsImage from "../../assets/congrats.jpg";
import React from "react";
import "./CheckOutPage.css";

const CheckOutPage = () => {
  return (
    <>
      <div className="checkout">
        <div className="congratsImage">
          <img src={congratsImage} alt="background image" />
        </div>

        <div className="checkOutInfo">
          <p className="congratulationsPara">Orderd Successfully🥳</p>
          <p className="para1">
            Your order has been successfully placed !!.
          </p>
          <p className="para2">
            Thank you for shopping with us!
          </p>
        </div>
      </div>
    </>
  );
};

export default CheckOutPage;
