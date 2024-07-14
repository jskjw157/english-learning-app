import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header({ toggleDarkMode, darkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-800 dark:bg-gray-900 text-white p-4">
      <nav className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">
            영어 학습 앱
          </Link>
          <div className="hidden md:flex space-x-4">
            <Link
              to="/features"
              className="hover:text-blue-300 transition-colors"
            >
              특징
            </Link>
            <Link
              to="/how-it-works"
              className="hover:text-blue-300 transition-colors"
            >
              작동 방식
            </Link>
            <Link
              to="/pricing"
              className="hover:text-blue-300 transition-colors"
            >
              가격
            </Link>
            <Link
              to="/contact"
              className="hover:text-blue-300 transition-colors"
            >
              연락처
            </Link>
            <Link
              to="/wordbank"
              className=" hover:text-blue-300 transition-colors"
            >
              단어장
            </Link>
            <Link to="/quiz" className=" hover:text-blue-300 transition-colors">
              퀴즈
            </Link>
          </div>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-600 dark:bg-gray-400"
          >
            {darkMode ? "🌞" : "🌙"}
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
          >
            ☰
          </button>
        </div>
        {isMenuOpen && (
          <div className="mt-6 md:hidden">
            <Link
              to="/features"
              className="block py-2 hover:text-blue-300 transition-colors"
            >
              특징
            </Link>
            <Link
              to="/how-it-works"
              className="block py-2 hover:text-blue-300 transition-colors"
            >
              작동 방식
            </Link>
            <Link
              to="/pricing"
              className="block py-2 hover:text-blue-300 transition-colors"
            >
              가격
            </Link>
            <Link
              to="/contact"
              className="block py-2 hover:text-blue-300 transition-colors"
            >
              연락처
            </Link>
            <Link
              to="/wordbank"
              className="block py-2 hover:text-blue-300 transition-colors"
            >
              단어장
            </Link>
            <Link
              to="/quiz"
              className="block py-2 hover:text-blue-300 transition-colors"
            >
              퀴즈
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
