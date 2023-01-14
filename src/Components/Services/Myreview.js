import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { AuthContext } from "../../Contexts/Context";
import Myreviewrow from "./MyreviewRow";

// import MyreviewRow from "./MyreviewRow";


const Myreview = () => {
  const { user, logOut } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  // this for review
  useEffect(() => {
    if (user?.email) {
      fetch(
        `http://localhost:5000/feedback?email=${user?.email}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("")}`,
          },
        }
      )
        .then((res) => {
          if (res.status === 401 || res.status === 402 || res.status === 403) {
            return logOut();
          }
          return res.json();
        })
        .then((data) => {
          // console.log('message ',data)
          setReviews(data);
        });
    }
  }, [user?.email]);

  // review delete handler

  const reviewDeleteHandler = (id) => {
    // sweet alert for warn user

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      // if click yes button
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/delete/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deleteSuccess) {
              const remainingFoodService = reviews.filter(
                (review) => review._id !== id
              );

              setReviews(remainingFoodService);

              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div>
      <Helmet>
        <title>Malithas Photograpgy - Review</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>

      {reviews.length === 0 ? (
        <div className="h-screen flex justify-center items-center">
          <h2 className="text-5xl">No review found !</h2>
        </div>
      ) : (
        <div className="h-screen">
          <div className="flex flex-col px-10 md:px-20">
            <div className="-m-1.5 overflow-x-auto">
              <div className="p-1.5 min-w-full inline-block align-middle">
                <div className="overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-md font-medium text-gray-500 uppercase"
                        >
                          #
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-md font-medium text-gray-500 uppercase"
                        >
                          {" "}
                          Service name
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-md font-medium text-gray-500 uppercase"
                        >
                          {" "}
                          Service Photo
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-md font-medium text-gray-500 uppercase"
                        >
                          {" "}
                          Review
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-right text-md font-medium text-gray-500 uppercase"
                        >
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {reviews.map((review, index) => (
                        <Myreviewrow
                          key={review._id}
                          index={index}
                          review={review}
                          reviewDeleteHandler={reviewDeleteHandler} 
                        />
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Myreview;
