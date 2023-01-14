import React, { useState } from 'react';
import { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { toast } from 'react-hot-toast';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/Context';
import ServiceReview from '../Services/ServiceReview';

const ServiceDescription = () => {
  const service = useLoaderData();
  const {user} = useContext(AuthContext);
  const [reviewReload, setReviewReload] = useState(false);
  const [reviews, setReview] = useState([]);

  const { _id, Name, photoURL, description, instruction, duration, price, packageIncludes } = service;

  const submitReview = (e) => {
    e.preventDefault();
    const form = e.target;
    const feedback = form.feedback.value;
    const userEmail = user.email;
    const userPhotoURL = user.photoURL;
    const displayName = user.displayName;
    const uid = user.uid;
    const servicePostId = _id;

    const userFeedBack = {
      feedback,
      userEmail,
      userPhotoURL,
      displayName,
      uid,
      servicePostId,
    };

    // send to server with post api

    fetch(`http://localhost:5000/add/feedback`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userFeedBack),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insert) {
          setReviewReload(true);
          form.reset();
          toast.success("Feeback successfully added");
        }
      });
  };
  return (
    <div>
      <Helmet>
        <title>Malithas Photography- Service Details</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div className="md:w-2/3 px-10 md:mx-auto py-10 ">
        <div className="card card-compact w-auto bg-base-100 shadow-xl">
          <figure>
            <PhotoProvider>
              <PhotoView src={photoURL}>
                <img
                  src={photoURL}
                  alt="food-recipies"
                  className="w-1/2 h-96"
                  style={{ objectFit: "cover" }}
                />
              </PhotoView>
            </PhotoProvider>
          </figure>
          <div className="card-body">
            <h2 className="card-title text-3xl">{Name}</h2>
            <h2 className="card-title">{description}</h2>
            <h2 className="card-title">Price:{price}</h2>

            <div >
              <div>
                <p className="uppercase text-amber-500">Instruction: {instruction} </p>
                <p>Duration :{duration}</p>
                <p>Package-Includes: {packageIncludes}</p>
                
              </div>
            </div>
          </div>
        </div>

        {/* review  */}

        <div>
          {reviews.map((review) => (
            <ServiceReview key={review._id} review={review} />
          ))}
        </div>

        {/* write comment */}

        <div>
          <div className="flex flex-col mt-5 items-center w-full">
            <form onSubmit={submitReview} className="flex flex-col w-full">
              <textarea
                rows="3"
                placeholder="Message..."
                className="p-2 rounded-md resize-none border bg-blue-200"
                name="feedback"
              ></textarea>

              {user?.uid ? (
                <button
                  onClick={() => setReviewReload(true)}
                  type="submit"
                  className="py-4 my-2 font-semibold text-white rounded-md bg-violet-400"
                >
                  Leave feedback
                </button>
              ) : (
                <Link to={"/login"}>
                  <button
                    type="button"
                    className="py-4 my-2 font-semibold w-full rounded-md text-white bg-violet-400"
                  >
                    Login to continue review
                  </button>
                </Link>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDescription;