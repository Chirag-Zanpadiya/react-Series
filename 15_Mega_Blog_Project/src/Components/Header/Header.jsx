import React from "react";
import { Container, Logo, LogoutBtn } from "../index";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

// yaha me conditional render karuga ki user agar login hai toh hi logout button dikhana chahiye
function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  // industry me yeh code use hota hai navigation ke liye
  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",

      // agar use authenticated hoga toh use login btn dikhaneka koi fayda nahi hai

      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  return (
    <header className="py-3 shadow bg-gray-500">
      <Container>
        <nav className="flex">
          <div className="mr-4">
            <Link to="/">
              <Logo width="70px" />
            </Link>
          </div>

          <ul className="flex ml-auto">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}

            {/* authStatus variable ko puch lege ki banda authendicated hai toh logout btn dekhadege agar nahi hai toh logout btn nahi 
          dikhayege */}

            {authStatus && (
              <li>
                <LogoutBtn /> 
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
