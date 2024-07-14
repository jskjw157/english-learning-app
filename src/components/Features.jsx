import React from "react";

function Features() {
  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">특징</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Chrome 확장 프로그램</h3>
          <p>웹 서핑 중 단어를 쉽게 저장하세요.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">맞춤형 퀴즈</h3>
          <p>저장한 단어로 퀴즈를 풀며 학습하세요.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">발음 학습</h3>
          <p>정확한 발음을 들으며 연습하세요.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">멀티 플랫폼</h3>
          <p>PC, 모바일, Chrome에서 사용 가능합니다.</p>
        </div>
      </div>
    </div>
  );
}

export default Features;
