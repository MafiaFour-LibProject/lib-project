
import PagesLayout from "../layouts/PagesLayout";



const BookForm = () => {
  return(
    <PagesLayout>

    
<div className="form-container">
    <h1>Add Your Book</h1>
    <h1>Add Your Book</h1>

    <form className="bookForm">
      <div class="form-group">
        <label for="bookTitle">Book Title:</label>
        <input type="text" id="bookTitle" placeholder required />
      </div>

      <div class="form-group">
        <label for="author">Author:</label>
        <input type="text" id="author" placeholder required />
      </div>

      <div class="form-group">
        <label for="genre">Genre:</label>
        <input type="text" id="genre" placeholder required />
      </div>

      <div class="form-group">
        <label for="pages">Number of Pages:</label>
        <input type="number" id="pages" placeholder min="1" required />
      </div>

      <div class="form-group">
        <label for="summary">Short Summary:</label>
        <textarea
          id="summary"
          placeholder="Write a very short summary about the book here..."
          rows="4"
        ></textarea>
      </div>

      <button type="submit">Add Book</button>
    </form>
  </div>

  </PagesLayout>
  )
};
export default BookForm;

