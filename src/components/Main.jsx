import React from 'react';
import Header from './Header';

function Main() {
  return (
    <div className="">
      <Header />
      <div className="bg-white/30 backdrop-blur-lg mx-6 sm:mx-12 md:mx-20 p-6 rounded-2xl shadow-md">
        <div className=" text-left">
          <p className="text-xl  py-4   font-extrabold  text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600">Welcome to my portfolio</p>
          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold text-gray-900">
            I'm a <span >Frontend </span>Developer.
          </h1>
        </div>
        <div className="flex justify-end">
          <p className="mt-10 max-w-lg text-right text-gray-700 text-sm sm:text-base md:text-lg">
            Hi there! I'm a frontend developer with a knack for creating visually appealing and 
            user-friendly web applications. I thrive on turning complex ideas into elegant, 
            functional designs. 
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;
