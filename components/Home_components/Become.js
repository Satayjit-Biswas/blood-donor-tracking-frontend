import React from "react";
import Home_style from "../../styles/Home.module.css";

const Become = () => {
  return (
    <div>
      <div className={`${Home_style.become_area}`}>
        <div className="container">
          <div className={`${Home_style.become_area_box}`}>
            <h4 className="mb_20">Become A Part Of Great Work Today</h4>
            <p>
              You can give blood at any of our blood donation venues all over
              the world.
            </p>
            <p>
              We have total sixty thousands donor centers and visit thousands of
              other venues on various occasions.
            </p>
            <div className="custom_btn mt_20">
              <a href="#">Join now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Become;
