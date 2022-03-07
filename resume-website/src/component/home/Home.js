// styels
import "./Home.css";
// image & icons
import pesonalImage from "../assets/image/sanazi.JPG";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faBirthdayCake } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
// component
import About from "../about-me/About";
import Skills from "../skill-me/Skills";
import Experinces from "../experince/Experinces";

export default function Home() {
  return (
    <main className="home_container">
      <section className="personal" id="personal">
        <img className="personal_img" src={pesonalImage} alt="pesonalImage" />
        <div className="personal_information">
          <div className="name"> ساناز نیامتی </div>
          <div className="detail_info">
            <div className="detail_info_row">
              <FontAwesomeIcon icon={faHome} />
              <p>ایران ، بوشهر</p>
            </div>
            <div className="detail_info_row">
              <FontAwesomeIcon icon={faBirthdayCake} />
              <p>1370.2.4</p>
            </div>
            <div className="detail_info_row">
              <FontAwesomeIcon icon={faPhone} />
              <p>09384997337</p>
            </div>
            <div className="detail_info_row">
              <FontAwesomeIcon icon={faLinkedin} />
              <p sclassName="detail_info_row">
                <a
                  className="link_linkdin"
                  href="https://www.linkedin.com/in/sanaz-niamati-a5ba60217/"
                >
                  sanaz-niamati-linkedin
                </a>
              </p>
            </div>
            <div className="detail_info_row">
              <FontAwesomeIcon icon={faEnvelope} />
              <p>sanaz.niamati@yahoo.com</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <About />
      </section>
      <section>
        <Skills />
      </section>
      <section>
        <Experinces />
      </section>
    </main>
  );
}
