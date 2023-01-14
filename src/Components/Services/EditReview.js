import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const EditReview = () => {
  const review = useLoaderData();
  const [updateReview, setUpdateReview] = useState(review);

  // review or feedback edit handler 

  const handleUpdate = async (e) => {
    e.preventDefault();
    fetch(`http://localhost:5000/update/feedback/${updateReview._id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updateReview),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Review updated");
        }
      });
  };

  // when wrting on input, then value will save hare

  const handleInputChange = (e) => {
    const fieldName = e.target.name;
    const value = e.target.value;

    const newReview = { ...updateReview };
    newReview[fieldName] = value;
    setUpdateReview(newReview);
  };

  return (
    <div className="h-screen">

      <Helmet>
        <title>Alishan Kitchen - Edit review</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>

      <div className="flex flex-col mt-40 items-center w-2/4 mx-auto">
        <h2 className="text-4xl font-bold text-orange-500 mb-2">
          Edit your review{" "}
        </h2>
        <form onSubmit={handleUpdate} className="flex flex-col w-full">
          <textarea
            onChange={handleInputChange}
            rows="3"
            defaultValue={review.feedback}
            className="p-2 rounded-md resize-none border bg-blue-200"
            name="feedback"
          ></textarea>

          <button
            type="submit"
            className="py-4 my-2 font-semibold text-white rounded-md bg-violet-400"
          >
            Update Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditReview;
