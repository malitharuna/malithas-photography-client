import React from "react";
import { Link } from "react-router-dom";
import ServiceCard from "./ServiceCard";


const Recipies = ({ Services }) => {
  return (
    <section className="py-6 sm:py-12  text-gray-100">
      <div className="container p-6 mx-auto space-y-8">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold text-red-400">Special Srvices</h2>
          <p className="font-serif text-md text-gray-800">
          Whether its a special occasion, or you're just feeling fancy, here are some extraordinary dinner recipes that are guaranteed to impress
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-3 gap-y-8 md:grid-cols-3">
          {Services.map((service) => (
            <ServiceCard key={service._id} service={service} />
          ))}
        </div>

          <div className="space-y-2 text-center">
             <Link to={'/showallservice'} className="text-2xl font-bold text-red-400"><button className="btn btn-outline btn-warning btn-sm">
              Show All
              </button></Link>
        </div>
      </div>
    </section>
  );
};

export default Recipies;
