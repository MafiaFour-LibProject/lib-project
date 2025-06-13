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
        <img
          className="w-screen h-screen relative"
          src={landingImage}
          alt="Landing Page Image"
        />
      </div>
      <div className=" landing-overlay absolute inset-0 flex flex-col justify-center items-start text-white px-16 bg-[rgba(0,50,50,0.3)]">
        <h1 className="text-[400%] text-white">Welcome to MF Library</h1>
        <h2 className="reveal-text text-2xl font-bold mb-12">
          <span className="word delay-1 ">Dream.</span>
          <span className="word delay-2">Drift.</span>
          <span className="word delay-3">Devour.</span>
        </h2>

        <button
          className="px-5 py-2 bg-blue-600 font-semibold rounded-sm cursor-pointer transition hover:bg-blue-800"
          onClick={handleGetStarted}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
