import React from "react";
import Home_style from "../../styles/Home.module.css";

const Volunteer = () => {
  return (
    <div className={`${Home_style.Volunteer_area}`}>
      <div className="container">
        <div className={`${Home_style.Volunteer_area_box}`}>
          <div>
            <h4 className="mb_20 under_line">OUR VOLUNTEERS</h4>
            <h2>
              The volunteers who give their time and talents help to fulfill our
              mission.
            </h2>
            <div className="custom_btn mt_20">
              <a href="#">Join now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Volunteer;
