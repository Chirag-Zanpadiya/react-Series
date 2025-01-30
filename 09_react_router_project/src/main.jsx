import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import User from "./components/User/User.jsx";
import Github, { getGithubInfo } from "./components/Github/Github.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },

//       {
//         path:"contact",
//         element:<Contact/>
//       }
//     ],
//   },
// ]);'

const route = createBrowserRouter(
  createRoutesFromElements(
    // parent router hai
    <Route path="/" element={<Layout />}>
      {/* layout ke andar jo outlet waha ye sare dynamically ja rahe hai */}

      {/* layout ke childredn hai yaha pai */}
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />

      {/* <Route path="about" element={<About />}> */}
      {/* <Route path="team" element={<Team />} />
      <Route path="company" element={<Company />} /> */}
      {/* </Route> */}

      <Route path="contact" element={<Contact />} />
      <Route path="user/:userid" element={<User />} />
      <Route loader={getGithubInfo} path="github" element={<Github />} />
    </Route>
  )
);

// second methods for the above

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* route provider setup karna padega */}
    <RouterProvider router={route} />
  </StrictMode>
);
