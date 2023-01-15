import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Myreviewrow = ({ review, index, reviewDeleteHandler }) => {

  const [ServiceInfo, setServiceInfo] = useState([]);
  const { Name, photoURL } = ServiceInfo;


  useEffect(() => {
    fetch(`https://b6a11-service-review-server-side-malitharuna.vercel.app/feedback/${review.servicePostId}`)
      .then((res) => res.json())
      .then((data) => setServiceInfo(data));
  }, [review]);

  return (
    <tr className="odd:bg-white even:bg-gray-100 dark:odd:bg-gray-800 dark:even:bg-gray-700">
      <td className="px-6 py-4 whitespace-nowrap text-md font-medium text-gray-800 dark:text-gray-200">
        {index + 1}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-md font-medium text-gray-800 dark:text-gray-200">
        {Name?.slice(0, 20) + '...'}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-md text-gray-800 dark:text-gray-200">
        <img src={photoURL} alt="" className="w-20" />
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-md text-gray-800 dark:text-gray-200">
        {review.feedback}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-md font-medium">
        <button
          onClick={() => reviewDeleteHandler(review._id)}
          className="btn btn-outline btn-warning btn-sm"
        >
          Delete
        </button>

        <Link className="ml-2" to={`/edit/review/${review._id}`}>
          <button className="btn btn-outline btn-warning btn-sm">Edit</button>
        </Link>
      </td>
    </tr>
  );
};

export default Myreviewrow;
