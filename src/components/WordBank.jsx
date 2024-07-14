import React, { useState, useEffect } from "react";

function WordBank() {
  const [words, setWords] = useState([]);
  const [newWord, setNewWord] = useState("");

  useEffect(() => {
    const savedWords = JSON.parse(localStorage.getItem("savedWords")) || [];
    setWords(savedWords);
  }, []);

  const saveWord = () => {
    if (newWord.trim() !== "") {
      const updatedWords = [...words, { word: newWord.trim(), definition: "" }];
      setWords(updatedWords);
      localStorage.setItem("savedWords", JSON.stringify(updatedWords));
      setNewWord("");
    }
  };
  const speakWord = (word) => {
    const speech = new SpeechSynthesisUtterance(word);
    speech.lang = "en-US";
    window.speechSynthesis.speak(speech);
  };
  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">내 단어장</h2>
      <div className="max-w-2xl mx-auto">
        <div className="flex mb-4">
          <input
            type="text"
            value={newWord}
            onChange={(e) => setNewWord(e.target.value)}
            className="flex-grow px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="새 단어 입력"
          />
          <button
            onClick={saveWord}
            className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition-colors"
          >
            저장
          </button>
        </div>
        <ul className="space-y-2">
          {words.map((word, index) => (
            <li
              key={index}
              className="bg-gray-100 dark:bg-gray-800 p-3 rounded-md flex justify-between items-center"
            >
              <span>{word.word}</span>
              <button
                onClick={() => speakWord(word.word)}
                className="bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-600 transition-colors"
              >
                🔊
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default WordBank;
