import { useState, useEffect } from "react";

function useWordSync() {
  const [words, setWords] = useState([]);

  useEffect(() => {
    const savedWords = JSON.parse(localStorage.getItem("savedWords")) || [];
    setWords(savedWords);
  }, []);

  const updateWords = (newWords) => {
    setWords(newWords);
    localStorage.setItem("savedWords", JSON.stringify(newWords));
  };

  return [words, updateWords];
}

export default useWordSync;
