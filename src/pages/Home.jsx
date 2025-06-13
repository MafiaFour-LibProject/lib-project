import PagesLayout from "../layouts/PagesLayout";
import homeImage1 from "../assets/home-image-1.jpg";
import heroImage from "../assets/hero.jpg";
import axios from "axios";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";
import { faBook, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
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
      <section className="hero-section relative">
        <div className="hero">
          <img src={heroImage} alt="" />
          {/* <video
            className="w-full h-screen object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/videos/hero-video.mp4" type="video/mp4" />
          </video> */}
        </div>
        <div className="hero-overlay absolute inset-0 flex flex-col justify-center items-center bg-transparent">
          <h1 className="-mt-24 font-bold text-white px-4">
            Discover Books That Inspire
          </h1>
          <span className="mt-8 bg-blue-600 text-white font-bold px-4 py-2 rounded cursor-pointer transition hover:bg-blue-700">
            <a href="#books-section">Browse Collection</a>
          </span>
        </div>
      </section>

      <div className="home-page flex justify-around items-center p-8 gap-[80px] m-16">
        <div className="home-left-section max-w-[400px] bg-[rgba(210,232,250,0.267)] shadow p-8">
          <h2 className="text-2xl font-bold mb-2 text-center">
            Every Story Starts Here
          </h2>
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
          <p className="text-sm">
            Whether you're here to discover a new favorite book or just unwind
            with a good read, we've got something for every kind of reader.
            <br></br> <br></br>
            From page-turning adventures to thoughtful nonfiction, MF Library is
            a space where stories come to life. <br></br>
          </p>
        </div>
        <div className="home-right-section flex w-full max-w-[480px] gap-2">
          <div className="home-image-1">
            <img
              className="h-[300px] w-[200px] object-cover rounded-[10px]"
              src={homeImage1}
              alt="Home Image 1"
            />
          </div>
          <div className="home-image-2 h-[300px] w-[200px] object-cover rounded-[10px]">
            <img src={homeImage1} alt="Home Image 2" />
          </div>
        </div>
      </div>

      <div className="book-display-title-container flex flex-col items-center justify-center text-center my-10">
        <h1 id="books-section" className="mb-4 text-xl font-bold text-black">
          Find Your Favorite Book
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

      <div className="search-container flex justify-center items-center gap-12">
        {/* <button className="add-book-button" onClick={handleNavigateToAdd}>
          Add Book
        </button> */}
        <div>
          <input
            className="w-[300px] px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-yellow-200"
            placeholder="Search..."
          />
          <button className="search-button text-white px-3 py-1 ml-[-1px] border border-gray-300 hover:bg-blue-700">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </div>

      <div id="bookDisplay">
        {loading ? (
          <p className="w-full flex justify-center">Loading...</p>
        ) : (
          <div className="grid grid-cols sm:grid-cols-2 md:grid-cols-3 gap-20 relative">
            {books.map((book) => {
              return (
                <div className="book-card flex flex-col justify-center items-center p-8 bg-white rounded-lg shadow transition transform hover:scale-105 gap-3">
                  <img
                    className="h-[250px] w-[160px] object-contain"
                    src={book.imageUrl}
                    alt="Book Display"
                  />

                  <h2 className="text-lg font-semibold mt-2">{book.title}</h2>
                  <p>{book.author}</p>
                  {/* <p className="published-year">{book.publishedYear}</p>
                  <p className="book-genre">{book.genre}</p> */}
                  <div title="view" className="buttons flex gap-[15px] mt-2">
                    <button
                      onClick={() => navigate(`/book-details/${book.id}`)}
                      className="view-button text-xs px-3 py-[2px] font-bold bg-blue-600 text-white rounded cursor-pointer hover:bg-blue-800"
                    >
                      <FontAwesomeIcon icon={faBook} />
                    </button>

                    <button
                      title="edit"
                      className="edit-book-button text-xs px-3 py-[2px] font-bold border border-green-600 text-green-600 bg-white rounded hover:bg-green-600 hover:text-white"
                      onClick={() => navigate(`/edit/${book.id}`)}
                    >
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <button
                      title="delete"
                      className="delete-book-button text-xs px-3 py-1 font-bold bg-red-600 text-white rounded cursor-pointer hover:bg-red-700"
                      onClick={() => handleDelete(book.id)}
                    >
                      <FontAwesomeIcon icon={faTrash} />
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
