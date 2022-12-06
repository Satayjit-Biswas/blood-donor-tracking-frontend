import Image from "next/image";
import t1 from "../../assets/img/about_feat_bg.jpg";
import Home_style from "../../styles/Home.module.css";

const Who = () => {
  return (
    <div className={`${Home_style.why_area}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className={`${Home_style.who_text_box}`}>
              <h4 className="under_line">Who We Are?</h4>
              <p>
                Blood Buddies is for public donation center with blood donation
                members in the changing health care system.
              </p>
              <ul>
                <li>Specialist blood donors and clinical supervision.</li>
                <li>Increasing communication with our members.</li>
                <li>High quality assessment, diagnosis and treatment.</li>
                <li>Examine critically to ensure alignment.</li>
                <li>The extra care of a multi-disciplinary team.</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="who_img">
              <Image src={t1} width="500" height="440" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Who;
