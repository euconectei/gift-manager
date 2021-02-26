import React, { useContext, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { UserContext } from "../../providers/UserProvider";

import { signInWithGoogle } from "../../services/firebase";

const Login = () => {
  const user = useContext(UserContext);
  const [redirect, setRedirect] = useState(null);

  useEffect(() => {
    if (user) {
      setRedirect("/admin");
    }
  }, [user]);

  if (redirect) {
    return <Redirect to={redirect} />;
  }

  return (
    <div>
      <div className='login-buttons'>
        <button className='login-provider-button' onClick={signInWithGoogle}>
          <img
            src='https://img.icons8.com/ios-filled/50/000000/google-logo.png'
            alt='google icon'
          />
          <span> Continue with Google</span>
        </button>
      </div>
    </div>
  );
};

export default Login;
