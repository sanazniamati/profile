import "./Experinces.css";

export default function Experinces() {
  return (
    <div className="experince_container">
      <div className="experince_box" id="experince">
        <p className="experince_title">تجربه های کاری من</p>
        <ul className="experince_items">
          <li>
            <a href="https://trello-site.vercel.app/" target="_blank">
              شبیه سازی سایت ترلو
            </a>
          </li>
          <li>
            <a href="https://trob-nextjs.vercel.app/" target="_blank">
              شبیه سازی سایت ترب
            </a>
          </li>
          <li>
            <a href="https://sarafi-bit-barg.vercel.app/" target="_blank">
              شبیه سازی سایت بیت برگ
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
