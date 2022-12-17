import Image from "next/image";
import React from "react";
import { AiOutlinePhone } from "react-icons/ai";
import { ImLocation2 } from "react-icons/im";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import b from "../assets/img/b.png";
import d1 from "../assets/img/d1.jpg";
import Page_header from "../components/Public/Page_header";
import Donor_style from "../styles/Donor.module.css";

const donor = () => {
  return (
    <div className="donor_area">
      <Page_header text="Find Donor"></Page_header>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className={`${Donor_style.donor_area_left}`}>
              <div className={`${Donor_style.find_input}`}>
                <p>Find your blood:</p>
                <input
                  type="text"
                  placeholder="Type your needed blood...."
                  name=""
                  id=""
                />
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <div className={`${Donor_style.donor_area_right}`}>
              <div className={`${Donor_style.donor_box}`}>
                <Image src={d1} width="280" height="300" />
                <div className={`${Donor_style.donor_text}`}>
                  <div className={`${Donor_style.doner_name}`}>
                    <h3>Harriet wason</h3>
                    <div className={`${Donor_style.blood_group}`}>
                      <Image src={b} width="80" height="30" />
                      <span>A+</span>
                    </div>
                  </div>
                  <p>Assistant teacher</p>
                  <ul>
                    <li>
                      <a href="mailto:xyz@abc.com">
                        <MdOutlineMarkEmailRead />
                      </a>
                    </li>
                    <li>
                      <a href="tel:0123456789">
                        <AiOutlinePhone />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <ImLocation2 />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={`${Donor_style.donor_box}`}>
                <Image src={d1} width="280" height="300" />
                <div className={`${Donor_style.donor_text}`}>
                  <div className={`${Donor_style.doner_name}`}>
                    <h3>Harriet wason</h3>
                    <div className={`${Donor_style.blood_group}`}>
                      <Image src={b} width="80" height="30" />
                      <span>A+</span>
                    </div>
                  </div>
                  <p>Assistant teacher</p>
                  <ul>
                    <li>
                      <a href="mailto:xyz@abc.com">
                        <MdOutlineMarkEmailRead />
                      </a>
                    </li>
                    <li>
                      <a href="tel:0123456789">
                        <AiOutlinePhone />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <ImLocation2 />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={`${Donor_style.donor_box}`}>
                <Image src={d1} width="280" height="300" />
                <div className={`${Donor_style.donor_text}`}>
                  <div className={`${Donor_style.doner_name}`}>
                    <h3>Harriet wason</h3>
                    <div className={`${Donor_style.blood_group}`}>
                      <Image src={b} width="80" height="30" />
                      <span>A+</span>
                    </div>
                  </div>
                  <p>Assistant teacher</p>
                  <ul>
                    <li>
                      <a href="mailto:xyz@abc.com">
                        <MdOutlineMarkEmailRead />
                      </a>
                    </li>
                    <li>
                      <a href="tel:0123456789">
                        <AiOutlinePhone />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <ImLocation2 />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={`${Donor_style.donor_box}`}>
                <Image src={d1} width="280" height="300" />
                <div className={`${Donor_style.donor_text}`}>
                  <div className={`${Donor_style.doner_name}`}>
                    <h3>Harriet wason</h3>
                    <div className={`${Donor_style.blood_group}`}>
                      <Image src={b} width="80" height="30" />
                      <span>A+</span>
                    </div>
                  </div>
                  <p>Assistant teacher</p>
                  <ul>
                    <li>
                      <a href="mailto:xyz@abc.com">
                        <MdOutlineMarkEmailRead />
                      </a>
                    </li>
                    <li>
                      <a href="tel:0123456789">
                        <AiOutlinePhone />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <ImLocation2 />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={`${Donor_style.donor_box}`}>
                <Image src={d1} width="280" height="300" />
                <div className={`${Donor_style.donor_text}`}>
                  <div className={`${Donor_style.doner_name}`}>
                    <h3>Harriet wason</h3>
                    <div className={`${Donor_style.blood_group}`}>
                      <Image src={b} width="80" height="30" />
                      <span>A+</span>
                    </div>
                  </div>
                  <p>Assistant teacher</p>
                  <ul>
                    <li>
                      <a href="mailto:xyz@abc.com">
                        <MdOutlineMarkEmailRead />
                      </a>
                    </li>
                    <li>
                      <a href="tel:0123456789">
                        <AiOutlinePhone />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <ImLocation2 />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default donor;
