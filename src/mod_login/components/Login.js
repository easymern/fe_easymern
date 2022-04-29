import React, { useState, useContext } from 'react';
import {set, useForm} from 'react-hook-form';
import { useNavigate } from "react-router-dom";

import {AuthContext} from "../../mod_shared/context/auth-context";

const Login = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const [isLoginMode, setIsLoginMode] = useState(true);
  const [loading, setLoading] = useState(false);


  // Use the forms state for the form.
  const { register, handleSubmit, formState: { errors } } = useForm();

  // Switch between login / register (not built yet)
  const setModeHandler = () => {
    isLoginMode ? setIsLoginMode(false) : setIsLoginMode(true);
  };

  const onSubmit = async data => {

    if (isLoginMode) {
      try {
        await auth.login(data.username, data.password);
        navigate("/", { replace: true });
      } catch (err) {}
    } else {
      try {
        console.log("insert registration function");
      } catch (err) {}
    }
  }

  return (
    <div className="col-md-12">
      <div className="card card-container">

        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="text" placeholder="username" {...register("username", {required: true, minLength: 3, maxLength: 18})} />
          {/*{errors.username?.type === 'required' && "Username is required"}*/}
          {errors.username && errors.username.type === 'required' && <span>Username required</span>}
          {/*{errors.username && errors.username.type === "maxLength" && <span>Max length exceeded</span> }*/}
          <input type="password" placeholder="password" {...register("password", {required: true, minLength: 3, maxLength: 16})} />
          {errors.password && errors.password.type === 'required' && <span>Password required</span>}
          <input type="submit" value={isLoginMode ? "Login" : "register"}/>
          <button onClick={setModeHandler}>Switch to {isLoginMode ? "register" : "login"}</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
