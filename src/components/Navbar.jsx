import { Link } from "react-router";
import logo from "../assets/mf-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faPlus } from "@fortawesome/free-solid-svg-icons";

import { useEffect } from "react";

const Navbar = () => {
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector("nav");

      if (window.scrollY > 50) {
        nav.classList.add("scrolled");
      } else {
        nav.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav>
      <div>
        <img className="logo" src={logo} alt="Logo" />
      </div>

      <div className="socials-container">
        <Link to="/add-book">
          <div className="add-book-icon">
            <FontAwesomeIcon icon={faBook} title="Add book" />
            <FontAwesomeIcon icon={faPlus} title="Add book" />
          </div>
        </Link>

        <div className=" socials-icons flex space-x-4">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "instagram"]}
              className="instagram hover:text-pink-500"
              title="Instagram"
            />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "twitter"]}
              className="twitter hover:text-blue-400"
              title="Twitter"
            />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "facebook"]}
              className="facebook hover:text-blue-600"
              title="Facebook"
            />
          </a>
          <a href="#contact">
            <FontAwesomeIcon
              icon="phone"
              className=" phone hover:text-green-500"
              title="Contact"
            />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
