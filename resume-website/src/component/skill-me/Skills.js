import "./Skills.css";

export default function Skills() {
  return (
    <div className="skill_container">
      <div className="skill_box" id="skills">
        <p className="skill_title">مهارت های من</p>

        <ul className="skills_item">
          {skill_name.map((items) => (
            <li key={items.id}>
              {items.title}
              <div style={{ display: "flex" }}>
                <p> {items.persent_skill}</p>
                <div className="box">
                  <div className={items.className}></div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
const skill_name = [
  { id: 0, title: "Html", persent_skill: "90%", className: "color_box_html" },
  { id: 1, title: "Css", persent_skill: "90%", className: "color_box_css" },
  {
    id: 2,
    title: "Javascript",
    persent_skill: "50%",
    className: "color_box_javascript",
  },
  {
    id: 3,
    title: "Reactjs",
    persent_skill: "50%",
    className: "color_box_react",
  },
  { id: 4, title: "Nextjs", persent_skill: "50%", className: "color_box_next" },
  {
    id: 5,
    title: "Git & GitHub",
    persent_skill: "50%",
    className: "color_box_git",
  },
];
