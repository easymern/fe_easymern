import React, {useContext, useState} from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from 'yup';

import AuthService from "../../services/auth.service";

const Register = () => {
  const history = useNavigate();
  const [loading, setLoading] = useState(false);

  // Using yup as per this example https://www.positronx.io/add-confirm-password-validation-in-react-with-hook-form/
  const formSchema = Yup.object().shape({
    username: Yup.string()
      .required("Username is required")
      .min(3, 'Username must be at least 3 characters long')
      .max(18, 'Username is too long (max 18)'),
    email: Yup.string().email('Must be a valid email')
      .max(255)
      .required('Email is required'),
    password: Yup.string()
      .required("Password is mandatory")
      .min(3, 'Password must be at least 3 characters long')
      .max(12, 'Password is too long (max 12)'),
    confirmPassword: Yup.string()
      .required("Please confirm password")
      .oneOf([Yup.ref('password')], 'Passwords must match'),
  })
  const formOptions = { resolver: yupResolver(formSchema)};
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;

  const onSubmit = async data => {
    console.log(JSON.stringify(data));
    const response = await AuthService.register(data.username, data.email, data.password);
    console.log(response)
  }

  return (
    <React.Fragment>
      <div className={"card"}>
        <div className={"card-body"}>

          <form onSubmit={handleSubmit(onSubmit)}>
              <div className={"col-6 form-group"}>
                <label className={"visually-hidden"} htmlFor={"username"}>Username</label>
                <input
                  id={"username"}
                  type="text"
                  placeholder="username" {...register("username")}
                  className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                />
                <div className="invalid-feedback">{errors.username?.message}</div>
              </div>

            <div className={"col-6 form-group"}>
              <label className={"visually-hidden"} htmlFor={"email"}>Email</label>
              <input
                id={"email"}
                type="text"
                placeholder="email" {...register("email")}
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              />
              <div className="invalid-feedback">{errors.email?.message}</div>
            </div>

            <div className={"col-6 form-group"}>
              <label className={"visually-hidden"} htmlFor={"password"}>Password</label>
              <input
                id={"password"}
                type="password"
                placeholder="password" {...register('password')}
                className={`form-control ${errors.password ? 'is-invalid' : ''}`}
              />
              <div className="invalid-feedback">{errors.password?.message}</div>
            </div>

            <div className={"col-6 form-group"}>
              <label className={"visually-hidden"} htmlFor={"confirmPassword"}>Confirm Password</label>
              <input
                id={"confirmPassword"}
                name="confirmPassword"
                type="password"
                placeholder="again"
                {...register('confirmPassword')}
                className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
              />
              <div className="invalid-feedback">{errors.confirmPassword?.message}</div>
            </div>

            <div className="col-auto form-group">
              <button type="submit" className="btn btn-primary">Register</button>
            </div>

          </form>

        </div>
      </div>
    </React.Fragment>
  );
};

export default Register;
