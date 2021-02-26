import React, { useEffect, useContext, useState } from "react";

import { Redirect } from "react-router-dom";
import GiftCreate from "../../components/gift/create";
import { UserContext } from "../../providers/UserProvider";
import { logOut } from "../../services/firebase";
const Admin = () => {
  const user = useContext(UserContext);
  const [redirect, setRedirect] = useState(null);

  useEffect(() => {
    console.log(user);
    if (!user) {
      setRedirect("/");
    }
  }, [user]);

  if (redirect) {
    return <Redirect to={redirect} />;
  }
  return (
    <div className='dashboard'>
      <h1 className='dashboard-text'>Welcome Home</h1>
      <button className='logout-button' onClick={logOut}>
        <img
          src='https://img.icons8.com/ios-filled/50/000000/google-logo.png'
          alt='google icon'
        />
        <span> logout</span>
      </button>

      <GiftCreate />
    </div>
  );
};

export default Admin;
