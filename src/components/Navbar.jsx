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
    <nav className="fixed flex justify-between items-center text-black w-full z-[1000] bg-transparent">
      <div>
        <img
          className="h-10 w-10 bg-white rounded-full"
          src={logo}
          alt="Logo"
        />
      </div>

      <div className="flex text-white gap-[30px]">
        <Link to="/add-book">
          <div className="add-book-icon">
            <FontAwesomeIcon icon={faBook} title="Add book" />
            <FontAwesomeIcon icon={faPlus} title="Add book" />
          </div>
        </Link>

        <div className=" flex justify-between items-center text-white gap-6 space-x-4">
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
