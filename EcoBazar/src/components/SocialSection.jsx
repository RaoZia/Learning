import React from "react";

const SocialSection = () => {
  return (
    <div>
      <div className="header-container">
        <div className="social-section">
          <div className=" social-top">
            <img src="/public/socials/Vector1.png" alt="" />
            <img src="/public/socials/Vector2.png" alt="" />
            <img src="/public/socials/Vector3.png" alt="" />
            <img src="/public/socials/Vector4.png" alt="" />
            <img src="/public/socials/Vector5.png" alt="" />
          </div>
          <div className="social-bottom mb-15">
            <h1 className="text-center font-semibold text-3xl">
              Follow us on Instagram
            </h1>
            <div className="social-bottom-imgs ">
              <img src="/public/socials/Instagram Post1.png" alt="" />
              <img src="/public/socials/Instagram Post2.png" alt="" />
              <img src="/public/socials/Instagram Post3.png" alt="" />
              <img src="/public/socials/Instagram Post4.png" alt="" />
              <img src="/public/socials/Instagram Post5.png" alt="" />
              <img src="/public/socials/Instagram Post6.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialSection;
