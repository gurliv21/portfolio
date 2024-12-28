import React from "react";
import img2 from "../asserts/img2.png";
import img3 from "../asserts/img3.png";
import img4 from "../asserts/img4.png";
import img5 from "../asserts/img5.png";
import img1 from "../asserts/img1.png";
import Header from "./Header";

const Project = () => {
  const images = [
    { src: img2, title: "MATHAI", des: "Converts your math solutions with the help of AI" },
    { src: img3, title: "Project 2", des: "Description for Project 2" },
    { src: img4, title: "Project 3", des: "Description for Project 3" },
    { src: img5, title: "Project 4", des: "Description for Project 4" },
    { src: img1, title: "Project 5", des: "Description for Project 5" },
  ];

  return (
    <div className="h-screen overflow-auto">
      <Header />
      <div className="container mx-auto px-6 py-16 ">
        <h1 className="text-5xl font-extrabold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600">
          Projects.
        </h1>
        <div className="grid grid-cols-1 gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="flex flex-row bg-white/30 backdrop-blur-lg p-8 rounded-2xl"
            >
              <img
                src={image.src}
                alt={`Project ${index + 1}`}
                className="w-96 h-64 object-cover rounded-lg mb-4 border-2 shadow-lg hover:shadow-xl transition-all duration-300"
              />
              <div>
                <h2 className="text-2xl font-semibold text-center">
                  {image.title}
                </h2>
                <p className="text-center mt-2">{image.des}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
