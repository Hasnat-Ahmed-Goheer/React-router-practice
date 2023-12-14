import React, { useEffect } from "react";
// import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const NotFound = () => {

  // best approach 
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      // how we use state in navigate
      navigate("/" ,{state:'error'  }); // it will take to the specified page as given inside the parenthesis
      // navigate(-1); it will take back one page in the history stack
    }, 2000);
  }, [navigate]);
  return <h2>Not Found</h2>;
  // it works if we want the user to return to a specific page if the URl is not found
  // return <Navigate to='/'/>;
};

export default NotFound;
