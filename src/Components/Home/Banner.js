import React from "react";
import { Link } from "react-router-dom";
// import bannerPic from '../../assets/download.jfif'

const Banner = () => {
  return (
    <div className="mt-10 md:mt-24 mb-10">
      <div className="hero  bg-base-50 rounded-md">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="">
            <img
              src="https://mybangla24.com/static/img/blog/photography-services-bangladesh.webp"
              alt=""
            />
          </div>
          <div className="md:w-1/2">
            <h1 className="text-5xl font-bold">
              WELCOME TO <br />
              <span className="text-red-600 mt-2">Malithas Photograpgy !</span>
            </h1>
            <p className="py-6">
            Photography is the art, application, and practice of creating durable images by recording light, either electronically by means of an image sensor, or chemically by means of a light-sensitive material such as photographic film. It is employed in many fields of science, manufacturing (e.g., photolithography), and business, as well as its more direct uses for art, film and video production, recreational purposes, hobby, and mass communication.
            </p>
            <Link to={"/showallservice"}>
              <button className="btn btn-primary">Make your day</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
