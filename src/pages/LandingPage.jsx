import landingImage from "../assets/formImage1.jpg";

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
        <h2 className="reveal-text">
          <span className="word delay-1">Dream.</span>
          <span className="word delay-2">Drift.</span>
          <span className="word delay-3">Devour.</span>
        </h2>

        <button onClick={handleGetStarted}>Get Started</button>
      </div>
    </div>
  );
};

export default LandingPage;
