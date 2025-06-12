import PagesLayout from "../layouts/PagesLayout";
// import formImage1 from "../assets/formImage1.jpg";
import formImage9 from "../assets/formImage9.jpg";
import axios from "axios";
import { useNavigate } from "react-router";

const BookForm = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    //prevent form from refreshing
    e.preventDefault();

    const FormData = e.target;
    
    console.log(FormData);

    const payload = {
      title: FormData.title.value,
      author: FormData.author.value,
      publishedYear: FormData.publishedYear.value,
      genre: FormData.genre.value,
      // summary: FormData.author.value,
    };
    try {
      const res = await axios.post(
        "https://backend-book-api.onrender.com/api/books/",
        payload
      );
      alert ("Book added successfully");
      navigate ("/home")
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <PagesLayout>
      <div className="section">
        <div className="form-container">
          {/* <h1>Add Your Book</h1> */}
          <h1>Add Your Book</h1>

          <form className="bookForm" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="bookTitle">Book Title:</label>
              <input
                type="text"
                id="bookTitle"
                name="title"
                placeholder="bookTitle"
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
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="genre">Genre:</label>
              <input
                type="text"
                id="genre"
                name="genre"
                placeholder="genre"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="publishedYear">Published Year:</label>
              <input
                type="number"
                id="pages"
                name="publishedYear"
                placeholder
                min="1"
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
  );
};
export default BookForm;
