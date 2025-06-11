import PagesLayout from "../layouts/PagesLayout";
import placeholderImage from "../assets/placeholder-image.jpg";
import homeImage1 from "../assets/home-image-1.jpg";

const Home = () => {
  return (
    <PagesLayout>
      <section className="hero-section">
        <div className="hero">
          <video
            className="w-full h-screen object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/videos/hero-video.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="hero-overlay">
          <h1>Welcome to MF Library</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
            error ipsam hic!
          </p>
        </div>
      </section>

      <div className="home-page">
        <div className="home-left-section">
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            aliquid id ipsam veritatis esse labore, et illum adipisci iusto
            laboriosam. <br></br> <br></br>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            aliquid id ipsam veritatis esse labore, et illum adipisci iusto
            laboriosam. <br></br>
          </p>
        </div>
        <div className="home-right-section">
          <div className="home-image-1">
            <img src={homeImage1} alt="Home Image 1" />
          </div>
          <div className="home-image-2">
            <img src={homeImage1} alt="Home Image 2" />
          </div>
        </div>
      </div>

      <div className="book-display-title-container flex flex-col items-center justify-center text-center my-10">
        <h1 className="text-3xl font-bold text-gray-800">Browse Our Books</h1>
        <div className="w-[130%] mt-2 text-[tomato]">
          <svg
            viewBox="0 0 200 20"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-5"
          >
            <path
              d="M 0,10 C 40,0 60,20 100,10 C 140,0 160,20 200,10"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
          </svg>
        </div>
      </div>

      <div id="bookDisplay">
        <div className="product-card">
          <div>
            <img src={placeholderImage} alt="" />
          </div>
          <p className="book-title">To Kill a Mockingbird</p>
          <p className="book-author">Harper Lee</p>
          <p className="published-year">1990</p>
          <p className="book-genre">Historical Fiction</p>
          <p className="available-copies">Available Copies</p>
          <button className="product-card-button">Read more...</button>
        </div>
        <div className="product-card">
          <div>
            <img src={placeholderImage} alt="" />
          </div>
          <p className="book-title">To Kill a Mockingbird</p>
          <p className="book-author">Harper Lee</p>
          <p className="published-year">1990</p>
          <p className="book-genre">Historical Fiction</p>
          <p className="available-copies">Available Copies</p>
          <button className="product-card-button">Read more...</button>
        </div>
        <div className="product-card">
          <div>
            <img src={placeholderImage} alt="" />
          </div>
          <p className="book-title">To Kill a Mockingbird</p>
          <p className="book-author">Harper Lee</p>
          <p className="published-year">1990</p>
          <p className="book-genre">Historical Fiction</p>
          <p className="available-copies">Available Copies</p>
          <button className="product-card-button">Read more...</button>
        </div>
        <div className="product-card">
          <div>
            <img src={placeholderImage} alt="" />
          </div>
          <p className="book-title">To Kill a Mockingbird</p>
          <p className="book-author">Harper Lee</p>
          <p className="published-year">1990</p>
          <p className="book-genre">Historical Fiction</p>
          <p className="available-copies">Available Copies</p>
          <button className="product-card-button">Read more...</button>
        </div>
        <div className="product-card">
          <div>
            <img src={placeholderImage} alt="" />
          </div>
          <p className="book-title">To Kill a Mockingbird</p>
          <p className="book-author">Harper Lee</p>
          <p className="published-year">1990</p>
          <p className="book-genre">Historical Fiction</p>
          <p className="available-copies">Available Copies</p>
          <button className="product-card-button">Read more...</button>
        </div>
        <div className="product-card">
          <div>
            <img src={placeholderImage} alt="" />
          </div>
          <p className="book-title">To Kill a Mockingbird</p>
          <p className="book-author">Harper Lee</p>
          <p className="published-year">1990</p>
          <p className="book-genre">Historical Fiction</p>
          <p className="available-copies">Available Copies</p>
          <button className="product-card-button">Read more...</button>
        </div>
      </div>
    </PagesLayout>
  );
};

export default Home;
