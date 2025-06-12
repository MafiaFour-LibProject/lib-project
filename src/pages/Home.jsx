import PagesLayout from "../layouts/PagesLayout";
import placeholderImage from "../assets/placeholder-image.jpg";
import homeImage1 from "../assets/home-image-1.jpg";
import axios from "axios";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";
import Editform from "./Editform";


const Home = () => {
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(
        `https://backend-book-api.onrender.com/api/books/${id}`
      );
      fetchBooks();
      alert(res.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchBooks = async () => {
    setLoading(true);

    try {
      const res = await axios.get(
        "https://backend-book-api.onrender.com/api/books"
      );

      console.log(res.data.data);
      setBooks(res.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const navigateToAdd = useNavigate();

  const handleNavigateToAdd = () => {
    navigateToAdd("/add-book");
  };

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
          <h1>Discover Books That Inspire</h1>
          <span>
            <a href="#books-section">Browse Books</a>
          </span>
        </div>
      </section>

      <div className="home-page">
        <div className="home-left-section">
          <h2>About Us</h2>
          <div className=" mt-2 text-[tomato]">
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
        <h1 id="books-section" className="text-3xl font-bold text-gray-800">
          Find Your Favorite Book...
        </h1>
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

      <div className="search-container">
        <button className="add-book-button" onClick={handleNavigateToAdd}>
          Add Book
        </button>
        <div>
          <input
            className="w-[300px] px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
            placeholder="Search..."
          />
          <button className="search-button">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </div>

      <div id="bookDisplay">
        {loading ? (
          <p className="w-full flex justify-center">Loading...</p>
        ) : (
          <div className="grid grid-cols sm:grid-cols-2 md:grid-cols-3 gap-6 relative">
            {books.map((book) => {
              return (
                <div className="book-card">
                  <img
                    className="h-2/5"
                    src={book.imageUrl}
                    alt="Book Display"
                  />
                  <h2>{book.title}</h2>
                  <p className="book-author">{book.author}</p>
                  <p className="published-year">{book.publishedYear}</p>
                  <p className="book-genre">{book.genre}</p>
                  <div className="add-delete-buttons">
                    <button
                      onClick={() => navigate(`/book-details/${book.id}`)}
                      className="book-card-button"
                    >
                      View details...
                    </button>
                    <button onClick={() =>navigate(`/edit/${book.id}`)}>Edit</button>
                    <button onClick={() => handleDelete(book.id)}>
                      Remove Book
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </PagesLayout>
  );
};

export default Home;
