import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from 'yup';

import { useNavigate } from "react-router-dom";

import AuthService from "../../services/auth.service";

const Register = () => {
  const [loading, setLoading] = useState(false);
  // Use the forms state for the form.

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

  const history = useNavigate();

  const onSubmit = async data => {
    console.log(JSON.stringify(data));
    setLoading(true);
    await AuthService.register(data.username, data.email, data.password)
      .then(setLoading(false))
      .then(history("/login"))
    // TODO add global state for flash message "thanks you can now login"
  }

  return (
    <div className="col-md-12">
      <div className="card card-container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={"form-group"}>
            <input
              type="text"
              placeholder="username" {...register("username")}
              className={`form-control ${errors.username ? 'is-invalid' : ''}`}
            />
            <div className="invalid-feedback">{errors.username?.message}</div>
          </div>
          <div className={"form-group"}>
            <input
              type="text"
              placeholder="email" {...register("email")}
              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            />
            <div className="invalid-feedback">{errors.email?.message}</div>
          </div>

          <div className={"form-group"}>
            <input
              type="password"
              placeholder="password" {...register('password')}
              className={`form-control ${errors.password ? 'is-invalid' : ''}`}
            />
            <div className="invalid-feedback">{errors.password?.message}</div>
          </div>

          <div className={"form-group"}>
            <input
              name="confirmPassword"
              type="password"
              placeholder="again"
              {...register('confirmPassword')}
              className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
              // className={`form-control ${errors.confirmPassword? 'is-valid' : ''}`}
            />
            <div className="invalid-feedback">{errors.confirmPassword?.message}</div>
          </div>

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

export default Register;
