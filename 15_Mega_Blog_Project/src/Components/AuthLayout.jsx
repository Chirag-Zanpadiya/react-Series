// ye ek tarah ka mechanism hai ki kaise routes and pages ko navigate kiya ja sakata hai
import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

// conditional reder hoga ki kya uske children ko render karna hai ya nahi

export default function Protected({ children, authentication = true }) {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const authStatus = useSelector((state) => state.auth.status);
  useEffect(() => {
    // TODO: it is more easy to undequstand
    // authenticated banda hai toh jaha per use ne navigate kara ho waha bhej dijiye
    // if (authStatus == true) {
    //   navigate("/");
    // } else {
    //   navigate("/login");
    // }

    // TODO: : make it more easy for
    // true && false !== true ==>true
    if (authentication && authStatus !== authentication) {
      navigate("/login");

      //   false && true !== true ==> false
    } else if (!authentication && authStatus !== authentication) {
      navigate("/");
    }

    setLoader(false);
  }, [authStatus, navigate, authentication]);
  return (
    <>
     { loader ? <div>Loading...</div> : {children}}
    </>
  );
}
