import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

// Define prop (like parameters but in curly braces). Pass this into the PagesLayout function, then call it where you want to use it, in this base, in between the Navbar and Footer.

const PagesLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default PagesLayout;
