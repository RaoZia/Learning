import React from "react";
import Slider from "react-slick";
import { IoIosArrowRoundForward } from "react-icons/io";
const TestimonialsCard = [
  {
    image: "/public/testimonial-imgs/profile1.png",
  },
  {
    image: "/public/testimonial-imgs/profile2.png",
  },
  {
    image: "/public/testimonial-imgs/profile3.png",
  },
];
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "green",
        borderRadius: "50%",
        position: "absolute",
        top: "-50px",
        right: "10px",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "black",
        borderRadius: "50%",
        position: "absolute",
        left: "auto",
        top: "-50px",
        right: "100px",
      }}
      onClick={onClick}
    />
  );
}
const ClientTestimonial = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="bg-[#F2F2F2]">
      <div className="header-container">
        <div className="client-testimonial py-10">
          <div className="testimonial-head ">
            <div className="testimonial-heading">
              <h1>Client Testimonials</h1>
            </div>
          </div>
          <div className="testimonial-cards mt-8">
            <Slider {...settings}>
              {TestimonialsCard.map((item) => {
                return (
                  <div className="testimonial-card mr">
                    <div className="card-logo text-[#00B207] text-2xl">"</div>
                    <div className="testimonial-content">
                      <p className="">
                        Pellentesque eu nibh eget mauris congue mattis mattis
                        nec tellus. Phasellus imperdiet elit eu magna dictum,
                        bibendum cursus velit sodales. Donec sed neque eget
                      </p>
                    </div>
                    <div className="testimonial-profile">
                      <div className="profile  ">
                        <div className="profile-img ">
                          <img src={item.image} alt="" />
                          <div className="profile-cred">
                            <h1 className="text-lg">Robert Fox</h1>
                            <p className="text-[#999999]">Customer</p>
                          </div>
                        </div>
                        <div className="testimonial-img">
                          <img
                            src="/public/testimonial-imgs/testimonial-Rating.png"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientTestimonial;
