import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useFirebase from "../../hooks/useFirebase";
import Login_styles from "../../styles/Login.module.css";

const Login_reg = () => {
  // location 
  const [Location, setLocation] = useState({});
  const { latitude, longitude } = Location;
  const url = `https://www.google.com/maps/place/${latitude}N ${longitude}E`;

  const successCallback = (position) => {
    setLocation(position.coords);
    console.log(position.coords);
  };
  const errorCallbacks = (err) => {
    console.log(err);
  };
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallbacks);
  });



  
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const { handleRegistration,handleEmailSign} = useFirebase();
  const click_account = useRef();
  const drop_form = (e) => {
    click_account.current.classList.toggle(`${Login_styles.form_showed}`);
  };

//   User register 
  const handleRegister = (event) => {
    event.preventDefault();
    setLoading(true);
    const name = event.target.name.value;
    const profession = event.target.profession.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
    const blood = event.target.blood.value.toUpperCase();
    const password = event.target.password.value;
    handleRegistration(email, password)
      .then((res) => {
        UserServer(name,profession, email, phone, blood, password);
      })
      .catch((er) => {
        toast.error(`Error : ${er}`);
      });
  };
  const UserServer = (name,profession, email, phone, blood, password) => {
    const adduser = {
      name: name,
      profession: profession,
      email: email,
      phone: phone,
      location: url,
      blood: blood,
      password: password,
    };
    fetch("http://localhost:5000/api/user", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(adduser),
    })
      .then((res) => {
        toast.success("Congratulation , Your Account is Open.");
        router.push("/");
      })
      .catch((er) => {
        toast.error(`Error : ${er}`);
      });
  };

//   user Login 
const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    handleEmailSign(email, password)
      .then((res) => {
        toast.success("Login Success");
        router.push("/");
      })
      .catch((er) => {
        toast.error(`Error : ${er}`);
      });
  };
  return (
    <div className={`${Login_styles.login_form_area}${" "}top_bottom_gap`}>
      <div className="container">
        <div className="mt_15 mb_15">
          <ToastContainer
            position="bottom-center"
            autoClose={3000}
            theme="dark"
          />

          <div className={Login_styles.login_form_area_box}>
            <div className={`${Login_styles.form_left} `} ref={click_account}>
              <h2 onClick={drop_form}>Creating Account</h2>
              <form onSubmit={handleRegister} className="mt_20">
                <div className={Login_styles.input_box}>
                  <label>Your Name</label>
                  <input type="text" name="name" placeholder="Name" required/>
                </div>
                <div className={Login_styles.input_box}>
                  <label>Your profession</label>
                  <input type="text" name="profession" placeholder="profession" required />
                </div>
                <div className={Login_styles.input_box}>
                  <label>Your img</label>
                  <input type="file" name="" placeholder="Your img" />
                </div>
                <div className={Login_styles.input_box}>
                  <label>Your Phone Number</label>
                  <input type="tel" name="phone" placeholder="Phone Number" required/>
                </div>
                <div className={Login_styles.input_box}>
                  <label>Your Blood Group</label>
                  <input
                    className={Login_styles.input_Blood}
                    type="text"
                    name="blood"required
                    placeholder="Your Blood Group (O+ , O- , A- , A+ , AB+....)"
                  />
                </div>
                <div className={Login_styles.input_box}>
                  <label>Your gmail</label>
                  <input type="email" name="email" placeholder="Email" required/>
                </div>
                <div className={Login_styles.input_box}>
                  <label>Password</label>
                  <input
                    type="password"
                    placeholder="Password"
                    name="password" required
                  />
                </div>
                {loading ? (
                  <button disabled>
                    <ClipLoader
                      color={"#dd0211"}
                      loading={true}
                      size={22}
                      cssOverride={{ display: "block", margin: "0 auto" }}
                    />{" "}
                  </button>
                ) : (
                  <button type="submit">Creating Account</button>
                )}
              </form>
            </div>
            <div className={Login_styles.form_right}>
              <h2>Log in</h2>
              <form onSubmit={handleLogin}>
                <div className={Login_styles.input_box}>
                  <label>Your gmail</label>
                  <input type="email" name="email" placeholder="Email" />
                </div>
                <div className={Login_styles.input_box}>
                  <label>Password</label>
                  <input type="password" placeholder="Password" name="password" />
                </div>
                <button type="submit">Log in</button>
              </form>
              <p>
                <a href="forgot">Forgot Password !</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login_reg;
