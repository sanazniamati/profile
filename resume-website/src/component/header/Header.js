// styles
import "./Header.css";
import sanazLogo from "../assets/image/sanaz.png";
// library
// library
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header_container">
      <div className="navbar">
        <ul className="navbar_items">
          <li>
            <HashLink to="/home#personal">خانه</HashLink>
          </li>
          <li>
            <HashLink to="/about#skills">مهارت های من</HashLink>
          </li>
          <li>
            <HashLink to="/skills#about">درباره من</HashLink>
          </li>
          <li>
            <HashLink to="/experince#experince">تجربه های کاری من</HashLink>
          </li>
        </ul>
      </div>
      <div className="logo">
        <a href="/CvDemo">
          <img src={sanazLogo} alt="sanazLogo" />
        </a>
      </div>
    </header>
  );
}
