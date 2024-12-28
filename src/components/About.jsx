import React from 'react';
import Header from './Header';
import img6 from '/Users/gurlivkaurbajwa/Desktop/portfolio/src/asserts/img6.png';

function About() {
  return (
    <div className='h-screen overflow-auto '>
      <Header />
      <div className="px-6 py-12">
        <h1 className="text-center font-extrabold text-6xl sm:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-[#001A6E] via-[#074799] to-[#009990]">
          I'm Gurliv.
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 mt-24 m-12">
          {/* Image Section */}
          <div className="flex justify-center">
            <img
              src={img6}
              alt="Gurliv"
              className="h-96 w-80 object-cover rounded-t-full "
            />
          </div>
          {/* Text Section */}
          <div className="flex flex-col justify-center">
            <h2 className="font-extrabold text-xl sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#001A6E] via-[#074799] to-[#009990] mb-4">
              I'm a Frontend Developer working remotely from the vibrant city of Bhopal, India.
            </h2>
            <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
              Over the past few years, I’ve explored various domains in tech, including web
              development, AI-driven solutions, open-source contributions, and building innovative
              tools with modern frameworks. I’m proud to have honed my skills and embraced
              challenges along the way.
            </p>
            <p className="text-gray-800 text-base sm:text-lg leading-relaxed mt-4">
              These days, I focus on creating impactful projects that bridge the gap between
              technology and human needs. My passion lies in leveraging AI, generative technologies,
              and user-friendly design to bring ideas to life.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
