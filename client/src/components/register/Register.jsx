import { Link } from "react-router-dom";
import { Slide } from "react-awesome-reveal";
import "./Register.css";
import { useContext } from "react";
import useForm from "../../hooks/useForm";
import AuthContext from "../../contexts/authContext";

const RegisterFormKeys = {
  Username: "username",
  Email: "email",
  Password: "password",
  RePassword: "re-password",
};

export default function Register() {
  const { registerSubmitHandler } = useContext(AuthContext);
  const { values, onChange, onSubmit } = useForm(registerSubmitHandler, {
    [RegisterFormKeys.Username]: "",
    [RegisterFormKeys.Email]: "",
    [RegisterFormKeys.Password]: "",
    [RegisterFormKeys.RePassword]: "",
  });

  return (
    <>
      <Slide direction="left" delay="10" duration="2000" triggerOnce="true">
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
              <img
                className="backImg"
                src="/img/melting-ice-cream-cone.jpg"
                alt=""
              />
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
              <div className="signup-form">
                <div className="title">Signup</div>
                <form id="register" onSubmit={onSubmit}>
                  <div className="input-boxes">
                    <div className="input-box">
                      <i className="fas fa-user" />
                      <input
                        type="text"
                        placeholder="Enter your name"
                        required=""
                        onChange={onChange}
                        name={RegisterFormKeys.Username}
                        value={values[RegisterFormKeys.Username]}
                      />
                    </div>
                    <div className="input-box">
                      <i className="fas fa-envelope" />
                      <input
                        type="text"
                        placeholder="Enter your email"
                        required=""
                        onChange={onChange}
                        name={RegisterFormKeys.Email}
                        value={values[RegisterFormKeys.Email]}
                      />
                    </div>
                    <div className="input-box">
                      <i className="fas fa-lock" />
                      <input
                        type="password"
                        placeholder="Enter your password"
                        required=""
                        onChange={onChange}
                        name={RegisterFormKeys.Password}
                        value={values[RegisterFormKeys.Password]}
                      />
                    </div>
                    <div className="input-box">
                      <i className="fas fa-lock" />
                      <input
                        type="password" 
                        placeholder="Enter your password"
                        required=""
                        onChange={onChange}
                        name={RegisterFormKeys.RePassword}
                        value={values[RegisterFormKeys.RePassword]}
                      />
                    </div>
                    <div className="button input-box">
                      <input type="submit" value="Register" />
                    </div>
                    <div className="text sign-up-text">
                      Already have an account?{" "}
                      <Link to={"/login"}>login here</Link>
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
