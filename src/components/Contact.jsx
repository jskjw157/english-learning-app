import React from "react";

function Contact() {
  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">연락처</h2>
      <div className="max-w-2xl mx-auto">
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1 font-medium">
              이름
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1 font-medium">
              이메일
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-1 font-medium">
              메시지
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition-colors"
          >
            보내기
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
