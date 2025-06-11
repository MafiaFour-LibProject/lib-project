import logo from "../assets/mf-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  return (
    <nav>
      <div>
        <img className="logo" src={logo} alt="Logo" />
      </div>

      <div className="socials-container">
        <div className="flex items-center justify-center gap-5">
          <button className="add-book">Add Book</button>
        </div>

        <div className=" socials-icons flex space-x-4">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "instagram"]}
              className="instagram hover:text-pink-500"
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
            />
          </a>
          <a href="#contact">
            <FontAwesomeIcon
              icon="phone"
              className=" phone hover:text-green-500"
            />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
