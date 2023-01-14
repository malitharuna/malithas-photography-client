import React from "react";
import { Helmet } from "react-helmet-async";

const ServiceReview = ({ review }) => {
  const { feedback, userPhotoURL, displayName } = review;

  return (
    <div className="container flex flex-col w-full mb-2 mt-5  p-6 mx-auto divide-y rounded-md divide-gray-700 bg-gray-200 dark:text-gray-100">
      
      <div className="flex justify-between p-4">
        <div className="flex space-x-4">
          <div>
            <img
              src={userPhotoURL ? userPhotoURL : "Not found"}
              alt=""
              className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
            />
          </div>
          <div>
            <h4 className="font-bold">
              {displayName ? displayName : "Not found"}
            </h4>
            {/* <span className="text-xs dark:text-gray-400">2 days ago</span> */}
          </div>
        </div>
      </div>
      <div className="p-4 space-y-2 text-sm dark:text-gray-400">
        <p>{feedback}</p>
      </div>
    </div>
  );
};

export default ServiceReview;
