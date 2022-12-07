import {
    MdAddIcCall,
    MdAddLocationAlt, MdOutlineMarkEmailRead
} from "react-icons/md";
import { TbWorldDownload } from "react-icons/tb";
import contact_styles from "../../styles/Contact.module.css";
const Form = () => {
    return (
        <div className={`${contact_styles.form_area}${" "}top_bottom_gap`}>
            <div className="container">
                <div className="mt_15 mb_15">
                    <div className={contact_styles.form_area_box}>
                        <div className={contact_styles.form_left}>
                            <h2>Lets get in touch</h2>
                            <p>
                                We are open for any suggestion or just to have a
                                chat
                            </p>
                            <ul>
                                <li>
                                    <span
                                        className={contact_styles.contact_icon}
                                    >
                                        <MdAddLocationAlt />
                                    </span>
                                    198 West 21th Street, Suite 721 New York NY
                                    10016
                                </li>
                                <li>
                                    <span
                                        className={contact_styles.contact_icon}
                                    >
                                        <MdOutlineMarkEmailRead />
                                    </span>
                                    <a href="mailto:info@devstar.com">
                                        info@devstar.com
                                    </a>
                                </li>
                                <li>
                                    <span
                                        className={contact_styles.contact_icon}
                                    >
                                        <MdAddIcCall />
                                    </span>
                                    <a href="tel:(+1)9999999999">
                                        (+1) 9999 999 999
                                    </a>
                                </li>
                                <li>
                                    <span
                                        className={contact_styles.contact_icon}
                                    >
                                        <TbWorldDownload />
                                    </span>
                                    <a href="tel:(+1)9999999999">
                                        www.devsstar.com
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className={contact_styles.form_right}>
                            <h2>Get in touch</h2>
                            <form action="">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div
                                            className={contact_styles.input_box}
                                        >
                                            <label>Full Name</label>
                                            <input
                                                type="text"
                                                required
                                                name="name"
                                                placeholder="Name"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div
                                            className={contact_styles.input_box}
                                        >
                                            <label>Your Gmail</label>
                                            <input
                                                type="email"
                                                name="gmail"
                                                required
                                                placeholder="Gmail"
                                                id=""
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div
                                            className={contact_styles.input_box}
                                        >
                                            <label>SUBJECT</label>
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder="Subject"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div
                                            className={contact_styles.input_box}
                                        >
                                            <label>message</label>
                                            <textarea
                                                required
                                                name="message"
                                                placeholder="Message"
                                            ></textarea>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <button type="submit">
                                            Send message
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;
