import React, { useState, useEffect } from "react";

function Progress() {
  const [totalWords, setTotalWords] = useState(0);
  const [learnedWords, setLearnedWords] = useState(0);

  useEffect(() => {
    const savedWords = JSON.parse(localStorage.getItem("savedWords")) || [];
    setTotalWords(savedWords.length);
    const learned = savedWords.filter((word) => word.learned).length;
    setLearnedWords(learned);
  }, []);

  const progress = totalWords > 0 ? (learnedWords / totalWords) * 100 : 0;

  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">학습 진행 상황</h2>
      <div className="max-w-2xl mx-auto">
        <div className="bg-gray-200 rounded-full h-6 dark:bg-gray-700">
          <div
            className="bg-blue-600 h-6 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-center mt-4">
          총 {totalWords}개의 단어 중 {learnedWords}개 학습 완료 (
          {progress.toFixed(1)}%)
        </p>
      </div>
    </div>
  );
}

export default Progress;
