// import React, { useEffect, useState } from "react";
// import appwriteService from "../appwrite/config";
// import { PostCard } from "../components/index";

// function AllPostPage() {
//   const [posts, setPosts] = useState([]);
//   useEffect(() => {
//     appwriteService.getPosts().then((posts) => {
//       if (posts) {
//         setPosts(posts.documents);
//       }
//     });
//   }, []);

//   if (posts.length == 0) {
//     return (
//       <>

//       <div className="bg-black min-h-screen mt-20 flex justify-center items-center">
//         <div class="bg-gray-800 rounded-lg shadow-2xl p-8 max-w-md w-full transform transition duration-500 hover:scale-105">
//           <div class="flex justify-center mb-6">
//             <svg
//               class="h-16 w-16 text-blue-500"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 stroke-width="2"
//                 d="M12 11c0-1.657-1.343-3-3-3S6 9.343 6 11v4a2 2 0 002 2h6a2 2 0 002-2v-4c0-1.657-1.343-3-3-3m0 0V7a3 3 0 00-6 0v4m6 0H6"
//               />
//             </svg>
//           </div>
//           <h2 class="text-2xl font-bold text-center text-white mb-4">
//             Thier is not any post right now 
//           </h2>
//           <p class="text-lg text-center text-white mb-6">
//             Please create a post
//           </p>
        
//         </div>
//         </div>
//       </>
//     );
//   }

// return (
//     <>
//         <div className="w-full py-8 bg-black min-h-screen    mt-20">
//             <div className="flex flex-wrap justify-start items-stretch gap-4 ">
//                     {posts.map((post)=>(
//                         <div key={post.$id} className="p-4   w-1/2  md:w-1/4  " >
//                                 <PostCard {...post} className = "" />
//                         </div>
//                     ))}
//             </div>

//         </div>
//     </>
// )
// }

// export default AllPostPage;



// TODO: new code 


import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { PostCard } from "../components/index";

function AllPostPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  if (posts.length === 0) {
    return (
      <div className="bg-black min-h-screen mt-20 flex justify-center items-center">
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
            There is no post right now
          </h2>
          <p className="text-lg text-center text-white mb-6">Please create a post</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full py-8 bg-black min-h-screen mt-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 place-items-center px-4">
        {posts.map((post) => (
          <div key={post.$id} className="w-full max-w-xs">
            <PostCard {...post} className="w-full h-full" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllPostPage;
