import React, { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from 'yup';

import {AuthContext} from "../../common/context/auth-context";
import {useHttpClient} from "../../common/hooks/http-hook";

const Login = () => {
  const API_URL = "http://localhost:3001/api-v1/auth/";
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  // Implement or remove.
  const [isLoginMode, setIsLoginMode] = useState(true);

  // Load for requests
  const {isLoading, sendRequest } = useHttpClient();

  const formSchema = Yup.object().shape({
    username: Yup.string()
      .required("Username is required"),
    password: Yup.string()
      .required("Needs a password."),
  })

  const formOptions = {resolver: yupResolver(formSchema)};
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;


  // Switch between login / register (not built yet)
  const setModeHandler = () => {
    isLoginMode ? setIsLoginMode(false) : setIsLoginMode(true);
  };

  const onSubmit = async data => {

    if (isLoginMode) {
      const responseData = await sendRequest(
        API_URL + "login",
        'POST',
        JSON.stringify({
          username: data.username,
          password: data.password
        }),
        {
          'Content-Type': 'application/json'
        }
      )
      // const responseData = await AuthService.login(data.username, data.password)
      await auth.login(
        responseData.id,
        responseData.accessToken,
        responseData.email,
        responseData.roles,
        responseData.username
      )
      navigate('/profile')
    }
  }

  return (
    <React.Fragment>
      <div className={"card"}>
        <div className={"card-body"}>
          <h3>Login!</h3>
          <form className="row gy-2 gx-3 align-items-center" onSubmit={handleSubmit(onSubmit)}>

            {/*Username*/}
            <div className="col-auto">
              <label htmlFor="username" className="visually-hidden">Username</label>
              <div className="input-group">
                <div className="input-group-text">@</div>
                <input
                  id={"username"}
                  className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                  type="text"
                  placeholder="username" {...register("username")}
                />
                <div className="invalid-feedback username">{errors.username?.message}</div>

              </div>
            </div>

            {/*Password*/}
            <div className={"col-auto"}>
              <label htmlFor="password" className="visually-hidden">Password</label>
              <div className="input-group">
                <div className="input-group-text">&nbsp;P&nbsp;</div>
                <input
                  id={"password"}
                  className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                  type="password"
                  placeholder="password" {...register("password")}
                />
                <div className="invalid-feedback password">{errors.password?.message}</div>
              </div>
            </div>

            {/*Submit*/}
            <div className="col-auto">
              <button type="submit" value={isLoginMode ? "Login" : "register"} className="btn btn-primary">{isLoginMode ? "Login" : "register"}</button>
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
