import React from "react";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="footer-wrapper bg-[#1A1A1A] ">
          <div className="header-container">
            <div className="footer-top py-15 flex flex-wrap justify-center gap-10 md:justify-between md:gap-0">
              <div className="text-sm text-white">
                <div>
                  <div className="flex items-center gap-1">
                    <img src="/public/Logo.png" alt="" />
                    <h1 className="text-3xl ">Ecobazar</h1>
                  </div>
                  <p className="max-w-100 w-full mt-4 font-light text-[#808080]">
                    Morbi cursus porttitor enim lobortis molestie. Duis gravida
                    turpis dui, eget bibendum magna congue nec.
                  </p>
                </div>
                <div className="footer-top-contact flex gap-4 mt-5">
                  <p className="border-b-2 border-[#20B526] py-2">
                    (219) 555-0114
                  </p>
                  <h1 className="border-b-2 border-[#20B526] py-2">
                    Proxy@gmail.com
                  </h1>
                </div>
              </div>
              <div className="footer-top-right flex flex-wrap justify-center gap-20">
                <div className="footer-top-account">
                  <h1>My Account</h1>
                  <ul className="footer-ul">
                    <li>
                      <a href="#">My Account</a>
                    </li>
                    <li>
                      <a href="#">Order History</a>
                    </li>
                    <li>
                      <a href="#" className="text-white">
                        Shopping Cart
                      </a>
                    </li>
                    <li>
                      <a href="#">Wishlist</a>
                    </li>
                  </ul>
                </div>
                <div className="footer-top-help">
                  <h1>Help</h1>
                  <ul className="footer-ul">
                    <li>
                      <a href="#">Contact</a>
                    </li>
                    <li>
                      <a href="#">Faqs</a>
                    </li>
                    <li>
                      <a href="#">Terms & Conditions</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                  </ul>
                </div>
                <div className="footer-top-proxy">
                  <h1>Proxy</h1>
                  <ul className="footer-ul">
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">Shop</a>
                    </li>
                    <li>
                      <a href="#">Product</a>
                    </li>
                    <li>
                      <a href="#">Track Order</a>
                    </li>
                  </ul>
                </div>
                <div className="footer-top-catagories">
                  <h1>Categories</h1>
                  <ul className="footer-ul">
                    <li>
                      <a href="#">Fruit & Vegetables</a>
                    </li>
                    <li>
                      <a href="#">Meat & Fish</a>
                    </li>
                    <li>
                      <a href="#">Bread & Bakery</a>
                    </li>
                    <li>
                      <a href="#">Beauty & Health</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <hr />
            <div className="footer-bottom flex flex-col gap-5 justify-between items-center py-7 sm:flex-row">
              <div className="footer-bottom-left text-sm font-light font-poppin text-[#808080]">
                <p>Ecobazar eCommerce © 2021. All Rights Reserved</p>
              </div>
              <div className="footer-bottom-right flex items-center gap-3">
                <img src="/public/ApplePay.png" alt="" />
                <img src="/public/Visa.png" alt="" />
                <img src="/public/Mastercard.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
