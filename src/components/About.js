import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="relative w-full h-screen bg-[#30475E] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-red-600 text-white">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hello, I'm Hafid, nice to meet you.</p>
          </div>
          <div>
            <p>
              I'm a Website Developer and really enjoy learning new things
              especially about Javascript & Typescript, I love doing all aspects
              of building websites from front-end to backend. I can spend hours
              on coding and be a valuable asset to you. I'm a goal-oriented
              person and enjoy adapting to a new environment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
