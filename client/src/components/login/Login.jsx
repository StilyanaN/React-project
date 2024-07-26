/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { Slide } from "react-awesome-reveal";
import { useContext } from "react";
import AuthContext from "../../contexts/authContext";

import "./Login.css";

import useForm from "../../hooks/useForm";

const LoginFormKeys = {
  Email: 'email',
  Password: 'password',
};

export default function Login() {
  const { loginSubmitHandler } = useContext(AuthContext);
  
  const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
      [LoginFormKeys.Email]: '',
      [LoginFormKeys.Password]: '',
  });

  return (
    <>
      <Slide direction='right' delay="10" duration="2000" triggerOnce='true'>
        <div className="container1">
          <input type="checkbox" id="flip" />
          <div className="cover">
            <div className="front">
              <img src="/img/melting-ice-cream-cone.jpg" alt="" />
              <div className="text">
                <span className="text-1">
                  Every new friend is a <br /> new adventure
                </span>
                <span className="text-2">Let&apos;s get connected</span>
              </div>
            </div>
            <div className="back">
              <img className="backImg" src="/img/melting-ice-cream-cone.jpg" alt="" />
              <div className="text">
                <span className="text-1">
                  Complete miles of journey <br /> with one step
                </span>
                <span className="text-2">Let&apos;s get started</span>
              </div>
            </div>
          </div>
          <div className="forms">
            <div className="form-content">
              <div className="login-form">
                <div className="title">Login</div>
                <form id="login" onSubmit={onSubmit}>
                  <div className="input-boxes">
                    <div className="input-box">
                      <i className="fas fa-envelope" />
                      <input
                        type="text"
                        id="email"
                        name="email"  
                        placeholder="Enter your email"
                        required=""
                        onChange={onChange} 
                        value={values[LoginFormKeys.Email]}
                      />
                    </div>
                    <div className="input-box">
                      <i className="fas fa-lock" />
                      <input
                        type="password"
                        id="password"
                        name="password"  
                        placeholder="Enter your password"
                        required=""
                        onChange={onChange} 
                        value={values[LoginFormKeys.Password]}
                      />
                    </div>
                    <div className="text">
                      <a href="#">Forgot password?</a>
                    </div>
                    <div className="button input-box">
                      <input type="submit" value="Login" />
                    </div>
                    <div className="text sign-up-text">
                      Don&apos;t have an account? <Link to={"/register"}>register here</Link>
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
