import { useParams } from "react-router";
import PagesLayout from "../layouts/PagesLayout";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import { useNavigate } from "react-router";

const BookDetails = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/home");
  };
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState({});

  // extracting id from router params

  const params = useParams();
  console.log(params);

  const fetchSingleBook = async () => {
    setLoading(true);

    try {
      const res = await axios.get(
        `https://backend-book-api.onrender.com/api/books/${params.id}`
      );

      console.log(res.data.data);
      setBook(res.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSingleBook();
  }, []);

  return (
    <PagesLayout>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div id="bookDetails">
          <button
            onClick={handleGetStarted}
            className="back-button  bg-blue-600"
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <h2 className="book-details-header">Book Details</h2>
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
          <div className="book-details-card flex justify-around items-center my-16 p-24 bg-white rounded-lg shadow border border-[rgba(218,165,32,0.281)]">
            <div className="left-section">
              <img
                className="w-[250px] h-auto"
                src={book.imageUrl}
                alt="Book Image"
              />
            </div>
            <div className="right-section flex flex-col justify-center gap-5">
              <h2 className="book-details-title text-[250%]">
                <strong>Title: </strong>
                {book.title}
              </h2>
              <p className="book-details-author">
                <strong>Author:</strong> {book.author}
              </p>
              <p className="book-details-year">
                <strong>Year published: </strong>
                {book.publishedYear}
              </p>
              <p className="book-details-genre">
                <strong>Genre:</strong> {book.genre}
              </p>
              <p className="book-details-copies">
                <strong>Available Copies: </strong>
                {book.availableCopies}
              </p>
            </div>
          </div>
        </div>
      )}
    </PagesLayout>
  );
};

export default BookDetails;
