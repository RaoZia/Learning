import React from "react";
import { MdDescription } from "react-icons/md";

const reputation = [
  {
    image: "/public/icon.png",
    title: "Best Services",
    description: "Nullam senectus porttitor in eget. Eget rutrum leo interdum.",
  },
  {
    image: "/public/icon.png",
    title: "Best Teams",
    description: "Cursus semper tellus volutpat aliquet lacus. ",
  },
  {
    image: "/public/design-icon.png",
    title: "Best Designs",
    description: "Ultricies at ipsum nunc, tristique nam lectus.",
  },
];
const services = [
  {
    image: "/public/construction-icon.png",
    title: "Construction",
  },
  {
    image: "/public/renovaiton-icon.png",
    title: "Renovation",
  },
  {
    image: "/public/consultation-icon.png",
    title: "Consultation",
  },

  {
    image: "/public/repair-icon.png",
    title: "Repair Services",
  },
  {
    image: "/public/architect-icon.png",
    title: "Architecture",
  },
  {
    image: "/public/electric-icon.png",
    title: "Electric",
  },
];
const Main = () => {
  return (
    <div>
      <main>
        <section>
          <img src="/public/Hero.png" alt="" />
        </section>
        <section>
          <div className="reputation-wrapper">
            <div className="reputation-container">
              <h1>Our Reputation</h1>
              <div className="reputation-cards ">
                {reputation.map((item) => {
                  return (
                    <div className="reputation-card" key={item}>
                      <img src={item.image} alt="" />
                      <h2>{item.title}</h2>
                      <p>{item.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="about-us-wrapper">
            <div className="about-us-container">
              <div className="about-us-img ">
                <img src="/public/about-us-img.png" alt="" />
              </div>
              <div className="about-us-content ">
                <h1>About Us</h1>
                <p>
                  For more than 30 years we have been delivering world-class
                  construction and we've built many lasting relationships along
                  the way. <br /> <br />
                  We've matured into an industry leader and trusted resource for
                  those seeking quality, innovation and reliability when
                  building in the U.S.
                </p>
                <button>More on Our History</button>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="services-wrapper">
            <div className="services-container">
              <h1>Services</h1>
              <div className="services-cards">
                {services.map((item) => {
                  return (
                    <div className="services-card" key={item}>
                      <img src={item.image} alt="" />
                      <h2>{item.title}</h2>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="experience-wrapper">
            <div className="experience-container">
              <div className="max-w-160 mx-auto w-full ">
                <div className="card max-w-90  rounded-md relative sm:max-w-70 w-full   ml-auto mr-auto shadow-md">
                  <img
                    src="/public/happy-clients.png"
                    className="absolute -top-5 -right-7"
                  />
                  <div className="p-7">
                    <h2 className="font-semibold text-7xl">84</h2>
                    <p className="font-light text-2xl mt-2">Happy Clients</p>
                  </div>
                </div>
                <div className="car max-w-90 rounded-md mt-15 sm:-mt-15  relative sm:max-w-90  w-full mx-auto sm:mx-0 shadow-md">
                  <img
                    src="/public/projects-completed.png"
                    className="absolute -top-12.5 -left-8"
                    alt=""
                  />
                  <div className="p-7">
                    <h2 className="font-semibold text-7xl">123</h2>
                    <p className="font-light text-2xl mt-2">
                      Projects Completed
                    </p>
                  </div>
                </div>
                <div className="car max-w-90 mt-15 sm:-mt-5 rounded-md relative sm:max-w-69 w-full ml-auto mr-auto  shadow-md">
                  <img
                    src="/public/award-wins.png"
                    className="absolute -top-3 -right-5"
                    alt=""
                  />
                  <div className="p-7">
                    <h2 className="font-semibold text-7xl">37</h2>
                    <p className="font-light text-2xl mt-2">Awards Win</p>
                  </div>
                </div>
                <div className="ca max-w-90 rounded-md mt-15 sm:-mt-12.5  relative sm:max-w-83 w-full mx-auto sm:mx-0 shadow-md">
                  <img
                    src="/public/business.png"
                    className="absolute  -right-10 -bottom-10"
                    alt=""
                  />
                  <div className="p-7">
                    <h2 className="font-semibold text-7xl">30</h2>
                    <p className="font-light text-2xl mt-2">
                      Years in Business
                    </p>
                  </div>
                </div>
              </div>
              {/* <div className="experience-left w-full mt-10">
                <div className="experience-cards relative max-w-70 w-full ml-auto mr-auto">
                  <img
                    src="/public/happy-clients.png"
                    className="absolute left-55 -top-15"
                  />
                  <div className="experience-card">
                    <h1>84</h1>
                    <p>Happy Clients</p>
                  </div>
                </div>
                <div className="experience-cards relative max-w-90  w-full">
                  <img
                    src="/public/projects-completed.png"
                    className="absolute -left-8 -top-10"
                  />
                  <div className="experience-card ">
                    <h1>123</h1>
                    <p>Projects Completed</p>
                  </div>
                </div>
                <div className="experience-cards relative max-w-69 w-full ml-auto mr-auto">
                  <img
                    src="/public/award-wins.png"
                    className="absolute left-40 -top-15"
                  />
                  <div className="experience-card">
                    <h1>37</h1>
                    <p>Award Win</p>
                  </div>
                </div>
                <div className="experience-cards relative max-w-83 w-full">
                  <img
                    src="/public/business.png"
                    className="absolute left-45 top-15"
                  />
                  <div className="experience-card">
                    <h1>30</h1>
                    <p>Years in Business</p>
                  </div>
                </div>
              </div> */}
              <div className="experience-right">
                <h1>30 Years Experience</h1>
                <p>
                  Our company has been the leading provided construction
                  services to clients throughout the USA since 1988.
                </p>
                <button>Contact Us</button>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="form-wrapper">
            <div className="form-container">
              <h1>What can us do for you ?</h1>
              <p>
                We are ready to work on a project of any complexity, whether
                it's commercial or residential.
              </p>
              <div className="main-form px-5">
                <form action="">
                  {/* <div className="w-full ">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-1/2 "
                    />
                    <input type="email" placeholder="Email" className="w-1/2" />
                  </div>
                  <div className="second-input mt-5">
                    <input type="text" placeholder="Reason for Contacting" />
                    <input type="text" placeholder="Phone" />
                  </div> */}
                  <div className="input-fields">
                    <input type="text" placeholder="Your Name" />
                    <input type="text" placeholder="Email" />
                    <input type="text" placeholder="Reason for Contacting" />
                    <input type="text" placeholder="Phone" />
                  </div>
                  <div>
                    <textarea
                      placeholder="Message"
                      className="textarea"
                      rows={5}
                    ></textarea>
                  </div>
                  <div className="form-btn ">
                    <button>Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Main;
