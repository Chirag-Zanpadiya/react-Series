// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./App.jsx";
// import { Provider } from "react-redux";
// import store from "./store/store.js";

// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import {
//   AllPost,
//   AuthLayout,
//   HeroSection,
//   Login,
//   Service,
//   SignUp,
// } from "./components/index.js";
// import AddPost from "./pages/AddPost.jsx";
// import EditPost from "./pages/EditPost.jsx";
// import Post from "./pages/Post.jsx";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "",
//         element: <HeroSection />,
//       },

//       {
//         path: "login",
//         element: (
//           <AuthLayout authentication={false}>
//             <Login />
//           </AuthLayout>
//         ),
//       },

//       {
//         path: "signup",
//         element: (
//           <AuthLayout authentication={false}>
//             <SignUp />
//           </AuthLayout>
//         ),
//       },

//       {
//         path: "allpost",
//         element: (
//           <AuthLayout authentication>
//             <AllPost />
//           </AuthLayout>
//         ),
//       },
//       {
//         path: "add-post",
//         element: (
//           <AuthLayout authentication>
//             <AddPost />
//           </AuthLayout>
//         ),
//       },

//       {
//         path: "edit-post/:slug",
//         element: (
//           <AuthLayout authentication>
//             <EditPost />
//           </AuthLayout>
//         ),
//       },
//       {
//         path: "post/:slug",
//         element: <Post />,
//       },
//       {
//         path: "service",
//         element: <Service />,
//       },
//     ],
//   },
// ]);

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <Provider store={store}>
//       <RouterProvider router={router}>
//         <App />
//       </RouterProvider>
//     </Provider>
//   </StrictMode>
// );

// COPY TODO:

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Service, Login, HeroSection } from "./components/index.js";
import AuthLayout from "./components/AuthLayout";
import AddPost from "./pages/AddPost.jsx";
import SignUp from "./pages/SignUp.jsx";
import EditPost from "./pages/EditPost.jsx";
import Post from "./pages/Post.jsx";
import AllPosts from "./pages/AllPosts.jsx";
import AllPostPage from "./pages/AllPostPage.jsx";
import Contact from "./components/Contact/Contact.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HeroSection />,
      },

      {
        path: "/login",
        element: (
          <AuthLayout authentication={false}>
            <Login />
          </AuthLayout>
        ),
      },
      {
        path: "/signup",
        element: (
          <AuthLayout authentication={false}>
            <SignUp />
          </AuthLayout>
        ),
      },
      {
        path: "/allposts",
        element:(
          <AuthLayout authentication = {true}>
            <AllPostPage/>
          </AuthLayout>
        ) 
      
      },
      {
        path: "/addpost",
        element: (
          <AuthLayout authentication = {true}>
            <AddPost />
          </AuthLayout>
        ),
      },
      {
        path: "/edit-post/:slug",
        element: (
          <AuthLayout authentication = {true}>
            <EditPost />
          </AuthLayout>
        ),
      },
      {
        path: "/post/:slug",
        element: <Post />,
      },
      {
        path: "service",
        element: <Service />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>{/* <App /> */}</RouterProvider>
    </Provider>
  </StrictMode>
);
