import heroImage from "../assets/hero-image.jpg";

const LandingPage = () => {
  return (
    <div id="hero">
      <div>
        <img src={heroImage} alt="" />
      </div>
      <div class="hero-overlay">
        <h1>MF Library</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        <button type="submit">Sign In</button>
      </div>
    </div>
  );
};

export default LandingPage;
