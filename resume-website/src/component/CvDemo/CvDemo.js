// import styles
import "./CvDemo.css";

export default function CvDemo() {
  return (
    <div className="body_container">
      <div className="container">
        <div className="left_side">
          <div className="container_name">
            <p>Sanaz Niamati</p>
          </div>
          <div className="user_info">
            <div className="address">
              <p className="address_title">Address</p>
              <p>Booshehr , Iran </p>
            </div>

            <div className="birthday">
              <p className="birthday_title">Birthday</p>
              <p>1991-4-24</p>
            </div>

            <div className="email">
              <p className="email_title">contact</p>
              <p>+98 9384997337</p>
              <p> sanaz.niamati@yahoo.com</p>
            </div>
            <div className="linkdin">
              <p className="linkdin_title">linkdin</p>
              <p>
                <a
                  href="https://www.linkedin.com/in/sanaz-niamati-a5ba60217/"
                  target="_blank"
                >
                  linkedin sanaz-niamati
                </a>
              </p>
            </div>
            <div className="languge_container">
              <div className="languge_title">Language Skills</div>
              <div>I can read documents</div>
            </div>
          </div>
        </div>

        <div className="right_side">
          <div className="summary">
            <p
              style={{
                color: "darkblue",
                fontWeight: "600",
                fontSize: 16,
                fontFamily: "Asap ,sans-serif",
                lineHeight: 3,
              }}
            >
              Summary
            </p>
            <p>Junior Web Developer specializing in front end development.</p>
          </div>
          <div className="work_experiences">
            <p
              style={{
                color: "darkblue",
                fontWeight: "600",
                fontSize: 16,
                fontFamily: "Asap ,sans-serif",
                lineHeight: 3,
              }}
            >
              Work Experiences
            </p>
            <p> Live site </p>
            <ul style={{ paddingLeft: 25 }}>
              <li>
                <a
                  href="https://sarafi-bit-barg.vercel.app/"
                  style={{
                    textDecoration: "none",
                    fontSize: 12,
                    fontWeight: 500,
                    color: "black",
                  }}
                  href="/https:// sarafi-bit-barg.vercel.app/"
                >
                  https:// sarafi-bit-barg.vercel.app/sales
                </a>
              </li>
              <li>
                <a
                  href="https://trello-site.vercel.app/"
                  style={{
                    textDecoration: "none",
                    fontSize: 12,
                    color: "black",
                  }}
                >
                  https://trello-site.vercel.app/
                </a>
              </li>
              <li>
                <a
                  href="https://trob-nextjs.vercel.app/"
                  style={{
                    textDecoration: "none",
                    fontSize: 12,
                    color: "black",
                  }}
                >
                  https://trob-nextjs.vercel.app
                </a>
              </li>
            </ul>
          </div>
          <div className="education">
            <p
              style={{
                color: "darkblue",
                fontWeight: "600",
                fontSize: 16,
                fontFamily: "Asap ,sans-serif",
                lineHeight: 3,
              }}
            >
              Education
            </p>
            <p>
              Bachelor Degree of Information technology ,
              <div>Slamic Azad University of Booshehr</div>
            </p>
          </div>
          <div className="skills">
            <p
              style={{
                color: "darkblue",
                fontWeight: "600",
                fontSize: 16,
                fontFamily: "Asap ,sans-serif",
                lineHeight: 3,
              }}
            >
              skills
            </p>
            <ul style={{ paddingLeft: 25 }}>
              <li>Html5</li>
              <li>css3</li>
              <li>Javascript</li>
              <li>ReactJs</li>
              <li>NextJs</li>
              <li>Git , Github</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
