import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";
import authService from "../appwrite/auth";


// post ki id toh id  jo yaha pe likhi hai woh hai
function PostCard({
  // ye appwrite ka systax me hai
  $id,
  title,
  featuredImage,
}) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-gray-100 rounded-xl p-4">
        <div className="w-full justify-center mb-4">

            <img src={appwriteService.getFilePreview(featuredImage)}  alt={title} className="rounded-xl" />
        </div>

        <h2 className="text-xl font-bold">{title}</h2>
      </div>
    </Link>
  );
}

export default PostCard;

// post card use hai ki  jab ham card to click karege toh pura blog aur kehasakate hai ki pura articles read kar sakate hai
