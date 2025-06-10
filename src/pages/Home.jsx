import PagesLayout from "../layouts/PagesLayout";

const Home = () => {
  return (
    <PagesLayout>
      <div className="home-page">
        <div className="home-left-section">
          <h2>Lorem ipsum dolor sit amet.</h2>
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
          <video
            className="w-full h-screen object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/videos/home-page-video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      <h1 className="book-display-title">Browse Our Books</h1>
      <div id="bookDisplay">Books go here</div>
    </PagesLayout>
  );
};

export default Home;
