// import React, { useEffect, useState } from 'react'
// import { PostCard } from '../components'
// import appwriteService from '../appwrite/config'
// import { useNavigate } from 'react-router-dom'

// function AllPosts() {
//     const [posts, setPosts] = useState([]);

//     useEffect(() => {}, [])
//     appwriteService.getPosts([]).then((posts) => {
//         if (posts) {
//             setPosts(posts.documents)
//         }
//     })
//   return (
//     <div className='w-full py-8'>
//             <div className='flex flex-wrap'>
//                 {posts.map((post) => (
//                     <div key={post.$id} className='p-2 w-1/4'>
//                         <PostCard {...post} />
//                     </div>
//                 ))}
//             </div>
//     </div>
//   )
// }
// export default AllPosts

// TODO: new code

import React, { useEffect, useState } from "react";
import { PostCard } from "../components";
import appwriteService from "../appwrite/config";
import { useNavigate } from "react-router-dom";

function AllPosts() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  if (posts.length === 0) {
    return (
      <div className="relative w-full min-h-screen flex items-center justify-center bg-[#1A1A19]">
        <div className="inset-0 w-2xl bg-opacity-75 flex items-center justify-center px-4">
          <div className="bg-gray-800 rounded-lg shadow-2xl p-8 max-w-md w-full transform transition duration-500 hover:scale-105">
            <div className="flex justify-center mb-6">
              <svg
                className="h-16 w-16 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 11c0-1.657-1.343-3-3-3S6 9.343 6 11v4a2 2 0 002 2h6a2 2 0 002-2v-4c0-1.657-1.343-3-3-3m0 0V7a3 3 0 00-6 0v4m6 0H6"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-center text-white mb-4">
              No Posts Available
            </h2>
            <p className="text-lg text-center text-white mb-6">
              Please create a post to see it here.
            </p>
            <button
              onClick={() => navigate("/addpost")}
              className="w-full hover:cursor-pointer bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition duration-300"
            >
              Create Post
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full py-8 ">
      <div className="flex flex-wrap">
        {posts.map((post) => (
          <div key={post.$id} className="p-2 w-1/4">
            <PostCard {...post} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllPosts;