import React, { useState } from 'react';
import {useForm} from 'react-hook-form';
import { useNavigate } from "react-router-dom";

import AuthService from "../../services/auth.service";


const Login = () => {
  const [loading, setLoading] = useState(false);
  // Use the forms state for the form.
  const { register, handleSubmit, formState: { errors } } = useForm();
  const history = useNavigate();

  const onSubmit = async data => {
    setLoading(true);
    await AuthService.login(data.username, data.password)
      .then(setLoading(false))
      .then(history("/"))
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
          <input type="submit" />
          <div className={"form-group"}>
            {loading && (
              <span className="spinner-border spinner-border-sm"></span>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
