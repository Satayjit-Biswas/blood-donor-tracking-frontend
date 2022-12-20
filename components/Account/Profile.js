import Image from "next/image";
import { useEffect, useState } from "react";
import d1 from "../../assets/img/d1.png";
import useFirebase from "../../hooks/useFirebase";
import profile_styles from "../../styles/Profile.module.css";

const Profile = () => {
    const [loading, setloading] = useState([true]);
  const [Userdata, setUserdata] = useState([]);
  const { user} = useFirebase();


  const {_id,name,profession,email,phone,location,blood} = Userdata;

  useEffect(() => {
    fetch(`http://localhost:5000/api/user/${user.id}`)
      .then((res) => res.json())
      .then((data) => {
        setUserdata(data);
        setloading(false);
      });
  }, []);
  return (
    <div className={`${profile_styles.login_form_area}${" "}top_bottom_gap`}>
      <div className="container">
        <div className={profile_styles.profile_box}>
          <div className="row">
            <div className="col-md-4">
              <Image src={d1} width="280" height="300" />
            </div>
            <div className="col-md-8">
              <div className={profile_styles.user_details}>
                <h4>Name : </h4>
                <h3>{name}</h3> 
              </div>
              <div className={profile_styles.user_details}>
                <h4>Email :</h4>
                <h3>Hihias eds</h3> 
              </div>
              <div className={profile_styles.user_details}>
                <h4>Phone :</h4>
                <h3>Hihias eds</h3> 
              </div>
              <div className={profile_styles.user_details}>
                <h4>Last blood bonot date :</h4>
                <h3>12/11/2021</h3> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
