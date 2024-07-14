import React from "react";

function HowItWorks() {
  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">작동 방식</h2>
      <div className="max-w-4xl mx-auto">
        <ol className="space-y-6">
          <li className="flex items-center space-x-4">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
              1
            </div>
            <div>
              <h3 className="text-xl font-semibold">
                Chrome 확장 프로그램 설치
              </h3>
              <p className="text-gray-600">
                우리의 Chrome 확장 프로그램을 설치하세요.
              </p>
            </div>
          </li>
          <li className="flex items-center space-x-4">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
              2
            </div>
            <div>
              <h3 className="text-xl font-semibold">
                웹 서핑 중 모르는 단어 클릭
              </h3>
              <p className="text-gray-600">
                웹 페이지에서 모르는 단어를 클릭하여 저장하세요.
              </p>
            </div>
          </li>
          <li className="flex items-center space-x-4">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
              3
            </div>
            <div>
              <h3 className="text-xl font-semibold">앱에서 저장된 단어 확인</h3>
              <p className="text-gray-600">
                앱을 열어 저장한 단어들을 확인하세요.
              </p>
            </div>
          </li>
          <li className="flex items-center space-x-4">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
              4
            </div>
            <div>
              <h3 className="text-xl font-semibold">퀴즈 풀기 및 발음 학습</h3>
              <p className="text-gray-600">
                저장한 단어로 퀴즈를 풀고 정확한 발음을 학습하세요.
              </p>
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default HowItWorks;
