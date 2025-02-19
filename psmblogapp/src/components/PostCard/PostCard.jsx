import React from "react";

// ye appwriteService basically file k preview lene ke liye hai
import appwriteService from "../../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  return (
    <>
      {/* ye linke ka to basically current pages se hamane database ke post to id ke basic per store kya hai toh is liye hamene $id lagaya hai */}

        {/* yaha per id wo pure post card ka id hai  */}
      <Link to={`/post/${$id}`}>
        <div className="max-w-sm   bg-gray-500 border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <img
            // yaha pe sirf image ke preview dekhana hai ki 
            // isliye ham appwrite ki service ko getpreview wali methods call kar degee
            src={appwriteService.getFilePreview(featuredImage)}
            className="rounded-xl w-full px-4 py-2 object-fill"
            alt={title}
          />

          <h2 className="mb-2 text-xl py-2 ml-4 font-semibold   max-w-full text-gray-900 dark:text-white overflow-hidden text-ellipsis whitespace-nowrap" >{title}</h2>
        </div>
      </Link>

      {/* <link
        to={`/post/${$id}`}
        className="flex flex-col items-center  border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >

        
      </link> */}
    </>
  );
}

export default PostCard;
