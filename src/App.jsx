import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import BookDetails from "./pages/BookDetails";
import LandingPage from "./pages/LandingPage";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import BookForm from "./pages/BookForm";
import Footer from "./components/Footer";
// import Editform from "./pages/Editform";
import Editform from "./pages/Editform";

library.add(fab, faPhone);

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
      path: "/book-details/:id",
      element: <BookDetails />,
    },

    {
      path: "/add-book",
      element: <BookForm />,
    },

    {
      path: "/edit/:id",
      element: <Editform />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
