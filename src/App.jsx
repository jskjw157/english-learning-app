import React, { useState, useEffect, Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Home = lazy(() => import("./components/Home"));
const Features = lazy(() => import("./components/Features"));
const HowItWorks = lazy(() => import("./components/HowItWorks"));
const Pricing = lazy(() => import("./components/Pricing"));
const Contact = lazy(() => import("./components/Contact"));
const WordBank = lazy(() => import("./components/WordBank"));
const Quiz = lazy(() => import("./components/Quiz"));
const Progress = lazy(() => import("./components/Progress"));

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div
        className={`font-sans leading-normal tracking-normal ${
          darkMode ? "dark" : ""
        }`}
      >
        <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        <main className="container mx-auto mt-4 px-4">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/features" element={<Features />} />
              <Route path="/how-it-works" element={<HowItWorks />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/wordbank" element={<WordBank />} />
              <Route path="/quiz" element={<Quiz />} />
              <Route path="/progress" element={<Progress />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
