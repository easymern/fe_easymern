import React, { useState, useContext } from 'react';
import {set, useForm} from 'react-hook-form';
import { useNavigate } from "react-router-dom";

import AuthService from "../../services/auth.service";
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
      const responseData = await AuthService.login(data.username, data.password)
      auth.login(
        responseData.id,
        responseData.accessToken,
        responseData.email,
        responseData.roles,
        responseData.username
      )
    }
  }

  return (
    <React.Fragment>
      <div className={"card"}>
        <div className={"card-body"}>
        <form className="row gy-2 gx-3 align-items-center" onSubmit={handleSubmit(onSubmit)}>
          <div className="col-auto">
            <label htmlFor="username" className="visually-hidden">Username</label>
            <div className="input-group">
              <div className="input-group-text">@</div>
              <input
                id={"username"}
                className={"form-control"}
                type="text"
                placeholder="username" {...register("username", {required: true, minLength: 3, maxLength: 18})}
              />
            </div>
            {errors.username && errors.username.type === 'required' && <span>Username required</span>}
          </div>
          <div className={"col-auto"}>
            <label htmlFor="password" className="visually-hidden">Password</label>
            <div className="input-group">
              <div className="input-group-text">&nbsp;P&nbsp;</div>
              <input
                id={"password"}
                className={"form-control"}
                type="password"
                placeholder="password" {...register("password", {required: true, minLength: 3, maxLength: 16})}
              />
            </div>
            {errors.password && errors.password.type === 'required' && <span>Password required</span>}
          </div>

            <div className="col-auto">
              <button type="submit" value={isLoginMode ? "Login" : "register"} className="btn btn-primary">Submit</button>
            </div>
            {/*<input type="submit" value={isLoginMode ? "Login" : "register"}/>*/}
            {/*<button onClick={setModeHandler}>Switch to {isLoginMode ? "register" : "login"}</button>*/}
        </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
