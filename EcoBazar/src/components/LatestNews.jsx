import React from "react";
import { FiTag } from "react-icons/fi";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { BiMessage } from "react-icons/bi";
const NewCards = [
  {
    image: "/public/news-cards/news-card1.png",
    description:
      "Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.",
  },
  {
    image: "/public/news-cards/news-card2.png",
    description: "Eget lobortis lorem lacinia. Vivamus pharetra semper.",
  },
  {
    image: "/public/news-cards/news-card3.png",
    description: "Maecenas blandit risus elementum mauris malesuada.",
  },
];
const LatestNews = () => {
  return (
    <div>
      <div className="header-container">
        <h1 className="latest-new-heading ">Latest News</h1>
        <div className="latest-news-cards ">
          {NewCards.map((item) => {
            return (
              <div className="latest-news-card  ">
                <div className="card-img">
                  <img src={item.image} alt="" />
                </div>
                <div className="card-content px-5">
                  <div className="card-socials ">
                    <div className="card-social ">
                      <FiTag />
                      <h1>Food</h1>
                    </div>
                    <div className="card-social ">
                      <IoPersonOutline />
                      <h1>Admin</h1>
                    </div>
                    <div className="card-social">
                      <BiMessage />
                      <h1>Comments</h1>
                    </div>
                  </div>
                  <p className="text-lg mt-2">{item.description}</p>
                  <div className="news-card-btn pb-5 flex items-center mt-5 text-[#00B207]">
                    <button className="cursor-pointer">Read More</button>
                    <IoIosArrowRoundForward className="cursor-pointer" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
