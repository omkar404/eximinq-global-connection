
import React, { useState } from "react";
import { Link } from "react-router-dom";
import MainNavbar from "../Common/TopBar";
import { Footer } from "../Common/Footer";

const PageNotFound = () => {
  const [showEnrollModal, setShowEnrollModal] = useState({
    open: false,
    type: null,
  });

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

  return (
    <>
      <MainNavbar 
              scrolled={scrolled}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      setShowEnrollModal={setShowEnrollModal}/>

      <div className="min-h-[70vh] flex items-center justify-center bg-gray-50 px-4">
        <div className="text-center max-w-xl">
          <h1 className="text-7xl font-bold text-gray-800 mb-4">404</h1>

          <h2 className="text-2xl font-semibold text-gray-700 mb-3">
            Page Not Found
          </h2>

          <p className="text-gray-600 mb-8">
            The page you are looking for doesn’t exist or has been moved.
            Check the URL or return to the homepage.
          </p>

          <Link
            to="/"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-md transition"
          >
            Go to Homepage
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PageNotFound;
