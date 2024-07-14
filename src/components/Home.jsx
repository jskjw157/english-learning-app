import React from "react";

function Home() {
  return (
    <div className="text-center py-20">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4 animate-fade-in-down">
        영어를 더 쉽게 공부하세요
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 animate-fade-in-up">
        웹에서 만나는 새로운 영단어를 쉽게 저장하고 학습하세요!
      </p>
      <a
        href="#download"
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors animate-pulse"
      >
        Chrome 확장 프로그램 설치하기
      </a>
      <img
        src="/images/background-2.webp"
        alt="영어 학습"
        className="w-full mt-12"
      />
    </div>
  );
}

export default Home;
