import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import BookDetails from "./pages/BookDetails";
import LandingPage from "./pages/LandingPage";
import BookForm from "./pages/BookForm";
import Footer from "./components/Footer";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },

    {
      path: "/home",
      element: <Home />,
    },

    {
      path: "/book-details",
      element: <BookDetails />,
    },

    {
      path: "/add-book",
      element: <BookForm />,

    },





  ]);
  return <RouterProvider router={router} />;
}

export default App;
      