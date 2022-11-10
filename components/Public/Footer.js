import Image from "next/image";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import {
    MdAddIcCall,
    MdAddLocationAlt,
    MdOutlineMarkEmailRead
} from "react-icons/md";
import logo from "../../assets/img/logo.png";
import footer_styles from "../../styles/Footer.module.css";
const Footer = () => {
    return (
        <div className={footer_styles.Footer_area}>
            <div className={footer_styles.top_footer}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12 mb_50">
                            <div className="top_footer_box">
                                <div className={footer_styles.footer_logo}>
                                    <a href="#">
                                        <Image
                                            src={logo}
                                            width="160"
                                            height="80"
                                        />
                                    </a>
                                </div>
                                <p className="mb_20 mt_10">
                                    Blood becomes a necessary commodity during
                                    times of danger and this software is
                                    developed to solve this problem.
                                </p>
                                <div className={footer_styles.footer_share}>
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <FaFacebookF />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <BsTwitter />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <FaLinkedinIn></FaLinkedinIn>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <FaInstagram></FaInstagram>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12 mb_50">
                            <div className={footer_styles.footer_services}>
                                <h5 className="upper_line mt_25">
                                    OUR SERVICES
                                </h5>
                                <p>
                                    <a href="#">Find Donor</a>
                                </p>
                                <p>
                                    <a href="#">Contact</a>
                                </p>

                                <p>
                                    <a href="#">24/Support</a>
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12 mb_50">
                            <div className={footer_styles.footer_contact}>
                                <h5 className="upper_line mt_25">
                                    CONTACT INFO
                                </h5>
                                <div className={footer_styles.info}>
                                    <div className={footer_styles.info_icon}>
                                        <MdAddLocationAlt />
                                    </div>
                                    <p>
                                        Ta-134/A, Gulshan Badda Link Rd, Dhaka
                                    </p>
                                </div>
                                <div className={footer_styles.info}>
                                    <div className={footer_styles.info_icon}>
                                        <MdAddIcCall />
                                    </div>
                                    <p>
                                        <a href="tel:(+1)9999999999">
                                            (+1) 9999 999 999
                                        </a>
                                    </p>
                                </div>
                                <div className={footer_styles.info}>
                                    <div className={footer_styles.info_icon}>
                                        <MdOutlineMarkEmailRead />
                                    </div>
                                    <p>
                                        <a href="mailto:info@devstar.com">
                                            info@devstar.com
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12 mb_50">
                            <div className={footer_styles.footer_newsletter}>
                                <h5 className="upper_line mt_25">NEWSLETTER</h5>
                                <p>
                                    Stay up to update with our latest news and
                                    products.
                                </p>
                                <form action="">
                                    <input
                                        type="text"
                                        required
                                        placeholder="Your email address"
                                    />
                                    <div className="custom_btn">
                                        <a className="" type="submit">
                                            Subscribe Now
                                        </a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={footer_styles.bottom_footer}>
                    <div className="container">
                        <p>
                            &copy; Copyright 2022 - Blood Bank. All Rights
                            Reserved.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
