import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
// import Socials from "../components/Socials";
import BookForm from "../pages/BookForm";

// Define prop (like parameters but in curly braces). Pass this into the PagesLayout function, then call it where you want to use it, in this base, in between the Navbar and Footer.

const PagesLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      {/* <Socials/> */}
      <Footer />
    </div>
  );
};

export default PagesLayout;
