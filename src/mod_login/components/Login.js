import React from 'react';
import { useForm } from 'react-hook-form';
import AuthService from "../../services/auth.service";


const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log("data: ", data);

    console.log("we're going to hit the API nnnnow")
    AuthService.login(data.username, data.password)
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
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Login;
