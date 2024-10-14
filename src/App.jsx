import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  createBrowserRouter,
  ScrollRestoration,
  RouterProvider,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BookDetail from "./pages/book-details/BookDetail";
import BookForm from "./pages/add-book/BookForm";
import HeroSection from "./components/HeroSection";
import About from "./pages/about/About";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import Footer from "./components/Footer";

import Review from "./pages/review/Review";
import RootLayout from "./layouts/RootLayout";
import BookList from "./pages/book-list/BookList";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <Login /> },
        { path: "/home", element: <Home /> },
        { path: "/books", element: <BookList /> },
        { path: "/books/:id", element: <BookDetail /> },
        { path: "/add", element: <BookForm /> },
        { path: "/edit/:id", element: <BookForm /> },
        { path: "/about", element: <About /> },
        { path: "/contact", element: <Contact /> },
        { path: "/reviews", element: <Review /> },
      ],
    },
  ]);

  return (
    <>
      <ToastContainer />
      <RouterProvider router={router} />
    </>
    // <Router>
    //   <div className="bg-gray-100 min-h-screen">
    //     <HeroSection />
    //     <div className="container mx-auto px-4 py-8">
    //       <Routes>
    //         <Route path="/" element={<Login />} />{" "}
    //         {/* Set Login as the default route */}
    //         <Route path="/home" element={<Home />} />{" "}
    //         {/* Change Home path to /home */}
    //         <Route path="/books" element={<BookList />} />
    //         <Route path="/books/:id" element={<BookDetail />} />
    //         <Route path="/add" element={<BookForm />} />
    //         <Route path="/edit/:id" element={<BookForm />} />
    //         <Route path="/about" element={<About />} />
    //         <Route path="/contact" element={<Contact />} />
    //         <Route path="/reviews" element={<Review />} />{" "}
    //         {/* Updated route to /reviews */}
    //       </Routes>
    //     </div>
    //     <Footer />
    //     <ToastContainer />
    //   </div>
    // </Router>
  );
}

export default App;
