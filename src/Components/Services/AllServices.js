import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import ServiceCard from "../Home/ServiceCard";
// import { Helmet } from "react-helmet-async";

const AllServices = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  // load data 

  useEffect(() => {
    fetch('http://localhost:5000/services')
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <progress className="progress w-full"></progress>;
  }

  return (
    <section className="py-6 sm:py-12  text-gray-100">

     <Helmet>
        <title>Malithas Photography- All Service</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>

      <div className="container p-6 mx-auto space-y-8">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold text-red-400">Special Offer</h2>
          <p className="font-serif text-md text-gray-800">
          We offer a wide variety of photography and videography services from wedding to pre/post wedding, maternity and baby photography, food, product, fashion, commercial, corporate event photography and more. At Nijol Creative, you will find a wide range of budget-friendly packages with top-notch services that are rare elsewhere.
          </p>
        </div>
        {/* <h1> services:{services.length}</h1> */}
        <div className="grid grid-cols-1 gap-x-3 gap-y-8 md:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service._id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllServices;
