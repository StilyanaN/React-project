/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from "react-router-dom";
import { Slide } from "react-awesome-reveal";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import AuthContext from "../../contexts/authContext";
import { loginSchema } from "../../utils/validationSchemas"

import "./Login.css";

export default function Login() {
  const { loginSubmitHandler } = useContext(AuthContext);

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    try {
      await loginSubmitHandler(data);
      toast.success('Login successful!');
    } catch (error) {
      toast.error('Login failed. Please check your credentials and try again.');
    }
  };
  return (
    <>
    <Slide direction="right" delay="10" duration="2000" triggerOnce="true">
      <div className="container1">
        <input type="checkbox" id="flip" />
        <div className="cover">
          <div className="front">
            <img src="/img/melting-ice-cream-cone.jpg" alt="" />
            <div className="text">
              <span className="text-1">
                Happy <br />
                to see you again!
              </span>
            </div>
          </div>
          <div className="back">
            <img
              className="backImg"
              src="/img/melting-ice-cream-cone.jpg"
              alt=""
            />
            <div className="text">
              <span className="text-1">
                Complete miles of journey <br />
                with one step
              </span>
              <span className="text-2">Let&apos;s get started</span>
            </div>
          </div>
        </div>
        <div className="forms">
          <div className="form-content">
            <div className="login-form">
              <div className="title">Login</div>
              <form id="login" onSubmit={handleSubmit(onSubmit)}>
                <div className="input-boxes">
                  <div className="input-box">
                    <i className="fas fa-envelope" />
                    <input
                      type="text"
                      id="email"
                      {...register('email')}
                      placeholder="Enter your email"
                      required=""
                    />
                    {errors.email && <p>{errors.email.message}</p>}
                  </div>
                  <div className="input-box">
                    <i className="fas fa-lock" />
                    <input
                      type="password"
                      id="password"
                      {...register('password')}
                      placeholder="Enter your password"
                      required=""
                    />
                    {errors.password && <p>{errors.password.message}</p>}
                  </div>
                  <div className="text">
                    <a href="#">Forgot password?</a>
                  </div>
                  <div className="button input-box">
                    <input type="submit" value="Login" />
                  </div>
                  <div className="text sign-up-text">
                    Don&apos;t have an account?{" "}
                    <Link to={"/register"}>register here</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  </>
  );
}
