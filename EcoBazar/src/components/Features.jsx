import React from "react";
import { LiaShippingFastSolid } from "react-icons/lia";
import { AiOutlineCustomerService } from "react-icons/ai";
import { BsBagCheck } from "react-icons/bs";
import { PiPackageThin } from "react-icons/pi";
const Features = () => {
  return (
    <div>
      <div className="header-container">
        <div className="feature-section mt-5">
          <div className="shipping feature-items">
            <LiaShippingFastSolid className="feature-icons" />
            <div className="feature-content">
              <h1>Free Shipping</h1>
              <p>Free shipping on all your order</p>
            </div>
          </div>
          <div className="customer-section feature-items">
            <AiOutlineCustomerService className="feature-icons" />
            <div className="feature-content">
              <h1>Customer Support 24/7</h1>
              <p>Instant access to Support</p>
            </div>
          </div>
          <div className="secure-payment feature-items">
            <BsBagCheck className="feature-icons" />
            <div className="feature-content">
              <h1>100% Secure Payment</h1>
              <p>We ensure your money is save</p>
            </div>
          </div>
          <div className="money-back feature-items">
            <PiPackageThin className="feature-icons" />
            <div className="feature-content">
              <h1>Money-Back Guarantee</h1>
              <p>30 Days Money-Back Guarantee</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
