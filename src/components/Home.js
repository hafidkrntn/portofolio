import React from "react";
import Photo from "../assets/photoprofil.png";

const Home = () => {
  return (
    <div name="home" className="container mx-auto h-screen">
      <div className="flex justify-between mx-auto">
        <div className="my-auto">
            <h1 className="mb-2 text-2xl">Hello Iam</h1>
            <h1 className="text-6xl">Muhamad Hafid Kurnianton</h1>
            <h1 className="text-4xl mt-2">Website Developer</h1>
        </div>
        <div>
            <img src={Photo} alt="ini foto" className="mx-auto"/>
        </div>
      </div>
    </div>
  );
};

export default Home;
