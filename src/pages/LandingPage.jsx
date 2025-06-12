import landingImage from "../assets/landing-image.jpg";

import { useNavigate } from "react-router";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/home");
  };
  return (
    <div id="landing">
      <div>
        <img src={landingImage} alt="" />
      </div>
      <div class="landing-overlay">
        <h1>Welcome to MF Library</h1>
        <p>
          Discover. <span>Dream</span>. Dive In
        </p>

        <button onClick={handleGetStarted}>Get Started</button>
      </div>
    </div>
  );
};

export default LandingPage;
