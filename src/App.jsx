import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BookList from './pages/book-list/BookList';
import BookDetail from './pages/book-details/BookDetail';
import BookForm from './pages/add-book/BookForm';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection'; // Import the HeroSection

function App() {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        <Navbar />
        <HeroSection /> {/* Add the Hero Section */}
        <div className="container mx-auto  px-4 py-8">
          <Routes>
            <Route path="/" element={<BookList />} />
            <Route path="/books/:id" element={<BookDetail />} />
            <Route path="/add" element={<BookForm />} />
            <Route path="/edit/:id" element={<BookForm />} />
          </Routes>
        </div>
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
