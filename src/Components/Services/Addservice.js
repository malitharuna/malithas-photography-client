import React from "react";
import { Helmet } from "react-helmet-async";
import { toast } from "react-hot-toast";


const Addservice= () => {
  const submitHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const Name = form.Name.value;
    const price = form.price.value;
    const photoURL = form.photoURL.value;
    const instruction = form.instruction.value;
    const packageIncludes = form.packageIncludes.value;
    const description = form.description.value;

    const Service = {
      Name,
      photoURL,
      instruction,
      price,
      packageIncludes,
      description,
    };

    // send data to server
    fetch("https://b6a11-service-review-server-side-malitharuna.vercel.app/addservice", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(Service),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insert) {
          toast.success("service added ");
          form.reset();
         }
      });
   };

  return (
    <div className="">
      <Helmet>
        <title>Malithas Photography - Add  Service</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      
      <div className="card-body  w-3/4 mx-auto mb-10 bg-slate-300 rounded-md mt-10 hover:shadow-lg ">
        <h2 className="text-center text-2xl font-bold text-orange-600">
          Add  service
        </h2>
        <form >
          <div className="grid md:grid-cols-2 gap-2">
            <div className="form-control">
              <label className="label">
                <span className="label-text "> Service Title</span>
              </label>
              <input
                type="text"
                name="Name"
                placeholder=" name"
                className="input input-bordered text-black"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text ">Photo URL</span>
              </label>
              <input
                type="text"
                name="photoURL"
                placeholder="photo url"
                className="input input-bordered text-black"
                required
              />
            </div>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text ">Description</span>
            </label>
            <div className="mt-4">
              <textarea
                className="textarea textarea-bordered w-full h-44"
                name="description"
                placeholder="Description"
                required
              ></textarea>
            </div>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text "> Photography booking Instruction</span>
            </label>
            <div className="mt-4">
              <textarea
                className="textarea textarea-bordered w-full h-22"
                name="instruction"
                placeholder="Instruction"
                required
              ></textarea>
            </div>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text ">Price</span>
            </label>
            <input
              type="text"
              name="price"
              placeholder="price"
              className="input input-bordered text-black"
              required
            />
          </div>
          
          <div className="form-control">
            <label className="label">
              <span className="label-text "> Package-Includes</span>
            </label>
            <div className="mt-4">
              <textarea
                className="textarea textarea-bordered w-full h-44"
                name="packageIncludes"
                placeholder="Ipackage-includes"
                required
              ></textarea>
            </div>
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-primary">Add </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Addservice;
