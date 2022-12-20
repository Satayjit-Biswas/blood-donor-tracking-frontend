import Image from "next/image";
import React from "react";
import { AiOutlinePhone } from "react-icons/ai";
import { ImLocation2 } from "react-icons/im";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import b from "../../assets/img/b.png";
import d1 from "../../assets/img/d1.jpg";
import Donor_style from "../../styles/Donor.module.css";

const Donor_user = (props) => {
    const {_id,name,email,phone,location,blood} = props.donor;
  return (
    <div><div className={`${Donor_style.donor_box}`}>
    <Image src={d1} width="280" height="300" />
    <div className={`${Donor_style.donor_text}`}>
      <div className={`${Donor_style.doner_name}`}>
        <h3>{name}</h3>
        <div className={`${Donor_style.blood_group}`}>
          <Image src={b} width="80" height="30" />
          <span>{blood}</span>
        </div>
      </div>
      <p>Assistant teacher</p>
      <ul>
        <li>
          <a href={`mailto:${email}`}>
            <MdOutlineMarkEmailRead />
          </a>
        </li>
        <li>
          <a href={`tel:${phone}`}>
            <AiOutlinePhone />
          </a>
        </li>
        <li>
          <a href={location} target="_blank" rel="noreferrer">
            <ImLocation2 />
          </a>
        </li>
      </ul>
    </div>
  </div></div>
  )
}

export default Donor_user