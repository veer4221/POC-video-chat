import React from "react";
import image from "../../images/v4_23.png";
import AvtarImg from "../../images/v8_264.png";
import { MdOutlineDashboard, MdOutlineRealEstateAgent } from "react-icons/md";
import { FaElementor } from "react-icons/fa";
import ScreenCard from "../../components/card";
const Home = () => {
  return (
    <div className="body">
      <div className="container-fluid">
        <div className="row main-container">
          <div className="col-2">
            <div className="p-5">
              <img src={image} />
            </div>
            <div className="p-3 pt-5 d-flex justify-content-center">
              <img
                src={AvtarImg}
                width="150px"
                height="150px"
                style={{ borderRadius: "50%" }}
              />
            </div>
            <div className="d-flex justify-content-center">
              <h3>Niya Patel</h3>
            </div>
            <div className="d-flex justify-content-center mt-5">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-4 d-flex  justify-content-end sidebar-menu">
                    {" "}
                    <MdOutlineDashboard size={30} />{" "}
                  </div>
                  <div className="col-8 " style={{ fontSize: "22px" }}>
                    <span className="sidebar-menu">
                      <b>Dashboard</b>
                    </span>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-4 d-flex  justify-content-end sidebar-menu">
                    {" "}
                    <FaElementor size={30} />{" "}
                  </div>
                  <div className="col-8 " style={{ fontSize: "22px" }}>
                    <span className="sidebar-menu">
                      <b>Customer</b>
                    </span>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-4 d-flex  justify-content-end sidebar-menu">
                    {" "}
                    <MdOutlineRealEstateAgent size={30} />{" "}
                  </div>
                  <div className="col-8 " style={{ fontSize: "22px" }}>
                    <span className="sidebar-menu">
                      <b>Agents</b>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-10 bg-App-A1">
            <ScreenCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
