import React from "react";
import PagesLayout from "../layouts/PagesLayout";
// import formImage1 from "../assets/formImage1.jpg";
import formImage9 from "../assets/formImage9.jpg";
import axios from "axios";
import { useNavigate, useParams } from "react-router";
// import { useNavigate,useParams } from 'react-router';
import { useState, useEffect } from "react";

const Editform = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState({});
  const [FormData, setFormData] = useState({});

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

  // const handleSubmit = async (e) => {
  //   //prevent form from refreshing
  //   e.preventDefault();

  //   const FormData = e.target;

  //   console.log(FormData);
  // };
  const handleSubmit = async (e) => {
    //prevent form from refreshing
    e.preventDefault();

    // const FormData = e.target;

    console.log(FormData);

    const payload = {
      title: FormData.title ?? book?.title,
      author: FormData.author ?? book?.author,
      publishedYear: FormData.publishedYear?? book?.publishedYear,
      genre: FormData.genre ?? book?.genre,
      // summary: FormData.author.value,
    };
    try {
      const res = await axios.put(
        `https://backend-book-api.onrender.com/api/books/${params.id}`,
        payload
      );
      alert(res.data.message);
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchSingleBook();
  }, []);

  return (
    <div>
      <PagesLayout>
        <div className="section">
          <div className="form-container">
            {/* <h1>Add Your Book</h1> */}
            <h1>Add Your Book</h1>

            <form className="bookForm" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="title">Book Title:</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="title"
                  value={FormData?.title ?? book?.title}
                  onChange={(e) =>
                    setFormData((prev) => {
                      return { ...prev, title: e.target.value };
                    })
                  }
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="author">Author:</label>
                <input
                  type="text"
                  id="author"
                  name="author"
                  placeholder="author"
                  value={FormData?.author ?? book?.author}
                  onChange={(e) =>
                    setFormData((prev) => {
                      return { ...prev, author: e.target.value };
                    })
                  }
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="genre">Genre:</label>
                <input
                  type="text"
                  id="genre"
                  name="genre"
                  value={FormData?.genre ?? book?.genre}
                  onChange={(e) =>
                    setFormData((prev) => {
                      return { ...prev, genre: e.target.value };
                    })
                  }
                  placeholder="genre"
                />
              </div>

              <div className="form-group">
                <label htmlFor="publishedYear">Published Year:</label>
                <input
                  type="number"
                  id="pages"
                  name="publishedYear"
                  onChange={(e) =>
                    setFormData((prev) => {
                      return { ...prev, publishedYear: e.target.value };
                    })
                  }
                  value={FormData?.publishedYear ?? book?.publishedYear}
                  placeholder="1"
                  required
                />
              </div>

              {/* <div className="form-group">
              <label htmlFor="summary">Short Summary:</label>
              <textarea
                id="summary"
                name="summary"
                placeholder="Write a very short summary about the book here..."
                rows="4"
              ></textarea>
            </div> */}

              <button type="submit">Add Book</button>
            </form>
          </div>

          <div className="section-image">
            <img src={formImage9} alt="Form Image 9" />
          </div>
        </div>
      </PagesLayout>
    </div>
  );
};

export default Editform;
