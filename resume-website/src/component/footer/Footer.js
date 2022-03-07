// styles
import "./Footer.css";
// library
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <div className="footer_container">
      <div className="github">
        <a href="https://github.com/" target="_blank">
          GitHub
        </a>
      </div>
      <div className="copyright">
        Sanaz Niamati 2022
        <FontAwesomeIcon icon={faCopyright}></FontAwesomeIcon>
      </div>
    </div>
  );
}
