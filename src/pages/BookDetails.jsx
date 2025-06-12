import { useParams } from "react-router";
import PagesLayout from "../layouts/PagesLayout";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const BookDetails = () => {
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
          <div className="book-details-card">
            <div className="left-section">
              <img src={book.imageUrl} alt="" />
            </div>
            <div className="right-section">
              <h2 className="book-title">{book.title}</h2>
              <p>{book.author}</p>
              <p>{book.publishedYear}</p>
              <p>{book.genre}</p>
              <p>{book.availableCopies}</p>
            </div>
          </div>
        </div>
      )}
    </PagesLayout>
  );
};

export default BookDetails;
