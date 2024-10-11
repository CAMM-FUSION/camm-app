import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BookList from './pages/book-list/BookList';
import BookDetail from './pages/book-details/BookDetail';
import BookForm from './pages/add-book/BookForm';
import HeroSection from './components/HeroSection'; 
import About from './pages/about/About';
import Login from './pages/login/login';
import Home from './pages/home/Home';

function App() {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        <HeroSection /> 
        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Login />} /> {/* Set Login as the default route */}
            <Route path="/home" element={<Home />} /> {/* Change Home path to /home */}
            <Route path="/books" element={<BookList />} />
            <Route path="/books/:id" element={<BookDetail />} />
            <Route path="/add" element={<BookForm />} />
            <Route path="/edit/:id" element={<BookForm />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
