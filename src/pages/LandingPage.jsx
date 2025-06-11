import landingImage from "../assets/landing-image.jpg";

const LandingPage = () => {
  return (
    <div id="landing">
      <div>
        <img src={landingImage} alt="" />
      </div>
      <div class="landing-overlay">
        <h1>MF Library</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        <button type="submit">Sign In</button>
      </div>
    </div>
  );
};

export default LandingPage;
