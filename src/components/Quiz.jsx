import React, { useState, useEffect } from "react";

function Quiz() {
  const [words, setWords] = useState([]);
  const [currentWord, setCurrentWord] = useState(null);
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    const savedWords = JSON.parse(localStorage.getItem("savedWords")) || [];
    setWords(savedWords);
    if (savedWords.length > 0) {
      setCurrentWord(savedWords[Math.floor(Math.random() * savedWords.length)]);
    }
  }, []);

  const checkAnswer = () => {
    if (userAnswer.toLowerCase().trim() === currentWord.word.toLowerCase()) {
      setFeedback("정답입니다!");
      // 단어 학습 상태 업데이트
      const updatedWords = words.map((word) =>
        word.word === currentWord.word ? { ...word, learned: true } : word
      );
      setWords(updatedWords);
      localStorage.setItem("savedWords", JSON.stringify(updatedWords));
    } else {
      setFeedback(`틀렸습니다. 정답은 ${currentWord.word} 입니다.`);
    }
    setUserAnswer("");
    setCurrentWord(words[Math.floor(Math.random() * words.length)]);
  };

  const speakWord = (word) => {
    const speech = new SpeechSynthesisUtterance(word);
    speech.lang = "en-US";
    window.speechSynthesis.speak(speech);
  };

  if (!currentWord) {
    return (
      <div className="text-center py-12">
        저장된 단어가 없습니다. 단어를 먼저 저장해주세요.
      </div>
    );
  }

  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">단어 퀴즈</h2>
      <div className="max-w-2xl mx-auto">
        <p className="text-xl mb-4">
          이 단어의 뜻은 무엇인가요? "{currentWord.definition}"
          <button
            onClick={() => speakWord(currentWord.word)}
            className="ml-2 bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-600 transition-colors"
          >
            🔊
          </button>
        </p>
        <div className="flex mb-4">
          <input
            type="text"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            className="flex-grow px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="답변 입력"
          />
          <button
            onClick={checkAnswer}
            className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition-colors"
          >
            확인
          </button>
        </div>
        {feedback && <p className="text-lg font-semibold">{feedback}</p>}
      </div>
    </div>
  );
}

export default Quiz;
