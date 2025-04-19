import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container footer_section ">
          <div className="footer_left">
            <p>
              LifeBahn — A community dedicated to preserving memories, legacies,
              and connections for a better tomorrow.
            </p>
            <div className="action_links">
              <div className="menu_actions">
                <Link to={"/"}>Home</Link>
                <Link to={"/about-us"}>About Us</Link>
                <Link to={"/user-guide"}>User Guide</Link>
                <Link to={"/profile/life-legacy"}>Life Legacy</Link>
              </div>
              <div className="social_links">
                <a href="https://www.facebook.com/profile.php?id=100085293056850">
                  Facebook
                </a>
                <a href="https://www.instagram.com/_lifebahnglobal?igsh=bTY3emVicGZ4anB6&utm_source=qr ">
                  Instagram
                </a>
                <a href="https://www.linkedin.com/in/lifebahn/">Linkedin</a>
              </div>
            </div>
          </div>
          <div className="footer_right">
            <p>📧 Email: info@lifebahnglobal.com</p>
            <p>📞 Phone: +34 627 780 921</p>
            <p>
              📍 Address: 5 Calle Ajalvir, Paracuellos de Jarama, Madrid, 28860,
              Spain
            </p>
            <Link to={"/policy"}> Privacy Policy</Link>
            <Link to={"/terms"}> Terms of Service</Link>
          </div>
        </div>
        <p className="footer_text">© 2025 Company, Inc</p>
      </footer>
    </>
  );
};

export default Footer;
